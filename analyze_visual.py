from playwright.sync_api import sync_playwright

def analyze_page(url, viewport_width=1920, viewport_height=1080):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        
        response = page.goto(url, wait_until='networkidle', timeout=30000)
        page.wait_for_timeout(2000)
        
        title = page.title()
        status = response.status if response else "Unknown"
        
        # Check for h1 visibility
        h1_info = page.evaluate('''() => {
            const h1 = document.querySelector('h1');
            if (!h1) return { exists: false, visible: false };
            const rect = h1.getBoundingClientRect();
            return {
                exists: true,
                visible: rect.top < window.innerHeight && rect.bottom > 0,
                text: h1.innerText.substring(0, 100),
                top: rect.top
            };
        }''')
        
        # Check for CTA buttons above fold
        cta_info = page.evaluate('''() => {
            const allButtons = Array.from(document.querySelectorAll('button, a[class*="cta"], a[class*="btn"], [class*="button"], a[class*="primary"], a[class*="secondary"]'));
            const viewportHeight = window.innerHeight;
            const visible = allButtons.filter(btn => {
                const rect = btn.getBoundingClientRect();
                return rect.top < viewportHeight && rect.bottom > 0 && rect.width > 0 && rect.height > 0;
            }).map(btn => {
                const rect = btn.getBoundingClientRect();
                return {
                    text: btn.innerText?.substring(0, 50) || 'No text',
                    tag: btn.tagName,
                    class: btn.className?.substring(0, 100) || '',
                    top: rect.top,
                    height: rect.height,
                    width: rect.width
                };
            });
            return { total: allButtons.length, visible: visible };
        }''')
        
        # Check navigation
        nav_info = page.evaluate('''() => {
            const nav = document.querySelector('nav, header');
            if (!nav) return { exists: false };
            const rect = nav.getBoundingClientRect();
            const links = Array.from(nav.querySelectorAll('a')).map(a => a.innerText.substring(0, 30));
            return {
                exists: true,
                height: rect.height,
                links: links.slice(0, 8)
            };
        }''')
        
        # Font size analysis
        font_info = page.evaluate('''() => {
            const body = document.body;
            const styles = window.getComputedStyle(body);
            const h1Styles = document.querySelector('h1') ? window.getComputedStyle(document.querySelector('h1')) : null;
            return {
                base_font_size: styles.fontSize,
                base_line_height: styles.lineHeight,
                h1_font_size: h1Styles ? h1Styles.fontSize : 'N/A'
            };
        }''')
        
        # Mobile-specific checks
        mobile_checks = page.evaluate('''() => {
            const hamburgerBtn = document.querySelector('button[class*="menu"], button[aria-label*="menu"], .hamburger');
            const viewportWidth = window.innerWidth;
            return {
                viewport_width: viewportWidth,
                has_hamburger: !!hamburgerBtn,
                horizontal_scroll: document.documentElement.scrollWidth > viewportWidth
            };
        }''')
        
        # Image loading check
        images_info = page.evaluate('''() => {
            const imgs = Array.from(document.querySelectorAll('img'));
            const aboveFold = imgs.filter(img => {
                const rect = img.getBoundingClientRect();
                return rect.top < window.innerHeight && rect.bottom > 0;
            });
            return {
                total: imgs.length,
                above_fold: aboveFold.length,
                unloaded: aboveFold.filter(img => !img.complete || img.naturalWidth === 0).length
            };
        }''')
        
        browser.close()
        
        return {
            "url": url,
            "title": title,
            "status": status,
            "h1": h1_info,
            "ctas": cta_info,
            "navigation": nav_info,
            "fonts": font_info,
            "mobile": mobile_checks,
            "images": images_info
        }

# Analyze pages
pages = [
    ("https://unnatvega.vercel.app", "Homepage"),
    ("https://unnatvega.vercel.app/services", "Services"),
    ("https://unnatvega.vercel.app/services/web-development", "Web Development"),
    ("https://unnatvega.vercel.app/services/app-development", "App Development"),
    ("https://unnatvega.vercel.app/services/ui-ux-design", "UI/UX Design"),
]

results = []
for url, name in pages:
    try:
        desktop = analyze_page(url, 1920, 1080)
        desktop['device'] = 'Desktop'
        desktop['page_name'] = name
        results.append(desktop)
        
        mobile = analyze_page(url, 375, 812)
        mobile['device'] = 'Mobile'
        mobile['page_name'] = name
        results.append(mobile)
    except Exception as e:
        print(f"Error analyzing {name}: {e}")

# Print results
print("\n" + "="*80)
print("VISUAL ANALYSIS REPORT - UNNAT VEGA")
print("="*80)

for r in results:
    print(f"\n{'='*60}")
    print(f"PAGE: {r['page_name']} ({r['device']})")
    print(f"{'='*60}")
    print(f"URL: {r['url']}")
    print(f"Status: {r['status']} | Title: {r['title']}")
    
    print(f"\n[Above-the-Fold Content]")
    h1 = r['h1']
    print(f"  H1 Visible: {h1.get('visible', False)} (exists: {h1.get('exists', False)})")
    if h1.get('exists'):
        print(f"  H1 Text: '{h1.get('text', 'N/A')}'")
        print(f"  H1 Position: top={h1.get('top', 0):.0f}px")
    
    print(f"\n[CTA Buttons]")
    ctas = r['ctas']
    print(f"  Total buttons: {ctas['total']} | Above fold: {len(ctas['visible'])}")
    for cta in ctas['visible'][:5]:
        touch_friendly = "OK" if cta['height'] >= 48 and cta['width'] >= 48 else "SMALL"
        print(f"    - '{cta['text']}' ({cta['width']:.0f}x{cta['height']:.0f}px) [{touch_friendly}]")
    
    print(f"\n[Navigation]")
    nav = r['navigation']
    if nav.get('exists'):
        print(f"  Height: {nav['height']:.0f}px")
        print(f"  Links: {', '.join(nav['links'][:6])}")
    else:
        print("  No nav/header element found")
    
    print(f"\n[Typography]")
    fonts = r['fonts']
    print(f"  Base font: {fonts['base_font_size']} (line-height: {fonts['base_line_height']})")
    print(f"  H1 font: {fonts['h1_font_size']}")
    
    print(f"\n[Mobile Responsiveness]")
    mobile = r['mobile']
    print(f"  Viewport width: {mobile['viewport_width']}px")
    print(f"  Has hamburger menu: {mobile['has_hamburger']}")
    print(f"  Horizontal scroll detected: {mobile['horizontal_scroll']}")
    
    print(f"\n[Images]")
    imgs = r['images']
    print(f"  Total: {imgs['total']} | Above fold: {imgs['above_fold']} | Unloaded: {imgs['unloaded']}")

print("\n" + "="*80)
