from playwright.sync_api import sync_playwright

def detailed_analysis(url, viewport_width, viewport_height, device_name):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        
        response = page.goto(url, wait_until='networkidle', timeout=30000)
        page.wait_for_timeout(2000)
        
        # Detailed hero section analysis
        hero_info = page.evaluate('''() => {
            const viewport = { width: window.innerWidth, height: window.innerHeight };
            
            // Find hero section (common selectors)
            const heroSelectors = ['section[class*="hero"]', '[class*="hero"]', 'section:first-of-type', 'main > section:first-child'];
            let hero = null;
            for (const sel of heroSelectors) {
                hero = document.querySelector(sel);
                if (hero) break;
            }
            
            // Hero CTA buttons (actual buttons, not nav)
            const heroButtons = hero ? Array.from(hero.querySelectorAll('button, a[class*="btn"], a[class*="button"], a[class*="cta"]')).filter(b => {
                const text = b.innerText?.toLowerCase() || '';
                return text.includes('start') || text.includes('view') || text.includes('contact') || text.includes('get');
            }) : [];
            
            const heroButtonInfo = heroButtons.slice(0, 3).map(btn => {
                const rect = btn.getBoundingClientRect();
                return {
                    text: btn.innerText.trim(),
                    top: rect.top,
                    height: rect.height,
                    width: rect.width,
                    visible: rect.top < viewport.height && rect.bottom > 0
                };
            });
            
            // Check for LCP (Largest Contentful Paint) element approximation
            const images = Array.from(document.querySelectorAll('img'));
            const heroImages = images.filter(img => {
                const rect = img.getBoundingClientRect();
                return rect.top < viewport.height && rect.width > 200;
            }).map(img => ({
                src: img.src?.substring(0, 60) || 'no-src',
                width: img.naturalWidth,
                height: img.naturalHeight,
                loaded: img.complete && img.naturalWidth > 0
            }));
            
            // Check text contrast issues (simplified)
            const textElements = Array.from(document.querySelectorAll('p, span, h1, h2, h3, a')).filter(el => {
                const rect = el.getBoundingClientRect();
                return rect.top < viewport.height && el.innerText?.trim().length > 0;
            }).slice(0, 10).map(el => ({
                text: el.innerText.trim().substring(0, 40),
                fontSize: window.getComputedStyle(el).fontSize
            }));
            
            // Animation checks
            const animatedElements = Array.from(document.querySelectorAll('[class*="animate"], [class*="motion"], [style*="animation"], [style*="transition"]')).length;
            
            return {
                viewport: viewport,
                hero_exists: !!hero,
                hero_height: hero ? hero.getBoundingClientRect().height : 0,
                hero_buttons: heroButtonInfo,
                hero_images: heroImages,
                sample_text: textElements,
                animated_elements: animatedElements
            };
        }''')
        
        # Check navigation links visibility
        nav_details = page.evaluate('''() => {
            const nav = document.querySelector('nav, header');
            if (!nav) return null;
            
            const links = Array.from(nav.querySelectorAll('a')).map(a => {
                const rect = a.getBoundingClientRect();
                return {
                    text: a.innerText.trim(),
                    visible: rect.width > 0 && rect.height > 0,
                    width: rect.width,
                    height: rect.height
                };
            });
            
            return {
                link_count: links.length,
                visible_links: links.filter(l => l.visible).length,
                links: links
            };
        }''')
        
        # Mobile-specific issues
        mobile_issues = page.evaluate('''() => {
            const issues = [];
            
            // Check tap targets
            const smallTargets = Array.from(document.querySelectorAll('a, button')).filter(el => {
                const rect = el.getBoundingClientRect();
                return rect.width < 48 || rect.height < 48;
            }).length;
            
            if (smallTargets > 5) {
                issues.push(`${smallTargets} elements smaller than 48x48px (WCAG tap target size)`);
            }
            
            // Check font sizes
            const smallText = Array.from(document.querySelectorAll('p, span, a')).filter(el => {
                const size = parseInt(window.getComputedStyle(el).fontSize);
                return size < 16;
            }).length;
            
            if (smallText > 10) {
                issues.push(`${smallText} text elements below 16px base size`);
            }
            
            // Check for viewport issues
            const scrollWidth = document.documentElement.scrollWidth;
            const windowWidth = window.innerWidth;
            if (scrollWidth > windowWidth + 10) {
                issues.push(`Horizontal scroll detected (${scrollWidth}px vs ${windowWidth}px)`);
            }
            
            return issues;
        }''')
        
        browser.close()
        
        return {
            'device': device_name,
            'viewport': f"{viewport_width}x{viewport_height}",
            'hero': hero_info,
            'nav': nav_details,
            'issues': mobile_issues
        }

# Run detailed analysis
print("\n" + "="*80)
print("DETAILED VISUAL ANALYSIS - HOMEPAGE")
print("="*80)

for width, height, name in [(1920, 1080, "Desktop"), (375, 812, "Mobile")]:
    result = detailed_analysis("https://unnatvega.vercel.app", width, height, name)
    
    print(f"\n[{result['device']} - {result['viewport']}]")
    print("-" * 60)
    
    hero = result['hero']
    print(f"\nHero Section:")
    print(f"  Exists: {hero['hero_exists']}")
    print(f"  Height: {hero['hero_height']:.0f}px")
    print(f"  Buttons in hero:")
    for btn in hero['hero_buttons']:
        status = "VISIBLE" if btn['visible'] else "NOT VISIBLE"
        touch = "Touch-friendly" if btn['width'] >= 48 and btn['height'] >= 48 else "TOO SMALL"
        print(f"    - '{btn['text']}' at {btn['top']:.0f}px ({btn['width']:.0f}x{btn['height']:.0f}px) [{status}, {touch}]")
    
    print(f"\n  Images in hero:")
    for img in hero['hero_images']:
        status = "Loaded" if img['loaded'] else "NOT LOADED"
        print(f"    - {img['width']}x{img['height']} - {status}")
    
    print(f"\n  Text samples:")
    for txt in hero['sample_text'][:5]:
        print(f"    - '{txt['text']}' ({txt['fontSize']})")
    
    print(f"\n  Animated elements: {hero['animated_elements']}")
    
    nav = result['nav']
    if nav:
        print(f"\nNavigation:")
        print(f"  Links: {nav['visible_links']}/{nav['link_count']} visible")
        for link in nav['links']:
            touch = "OK" if link['width'] >= 48 and link['height'] >= 48 else "SMALL"
            print(f"    - '{link['text']}' {link['width']:.0f}x{link['height']:.0f}px [{touch}]")
    
    if result['issues']:
        print(f"\n⚠ Issues Found:")
        for issue in result['issues']:
            print(f"    - {issue}")
    else:
        print(f"\n✓ No major issues detected")

print("\n" + "="*80)
