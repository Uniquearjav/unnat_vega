from playwright.sync_api import sync_playwright

def check_mobile_menu():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 375, 'height': 812})
        
        page.goto("https://unnatvega.vercel.app/", wait_until='networkidle', timeout=30000)
        page.wait_for_timeout(2000)
        
        # Check for mobile menu elements
        menu_info = page.evaluate('''() => {
            // Look for menu buttons
            const menuBtn = document.querySelector('button');
            const allButtons = Array.from(document.querySelectorAll('button, [role="button"]'));
            
            // Check if nav links are visible
            const nav = document.querySelector('nav');
            const navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];
            
            // Check for mobile-specific classes
            const html = document.documentElement.innerHTML;
            const hasMenuClasses = html.includes('md:hidden') || html.includes('lg:hidden') || html.includes('mobile');
            
            return {
                menu_button_count: allButtons.length,
                menu_buttons: allButtons.slice(0, 5).map(b => ({
                    class: b.className?.substring(0, 50) || '',
                    text: b.innerText?.substring(0, 30) || '',
                    aria_label: b.getAttribute('aria-label') || ''
                })),
                nav_links_visible: navLinks.filter(a => {
                    const rect = a.getBoundingClientRect();
                    return rect.width > 0 && rect.height > 0;
                }).length,
                has_menu_classes: hasMenuClasses
            };
        }''')
        
        # Try to click menu button
        click_result = page.evaluate('''() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const menuBtn = buttons.find(b => {
                const text = b.innerText?.toLowerCase() || '';
                const aria = b.getAttribute('aria-label')?.toLowerCase() || '';
                return text.includes('menu') || aria.includes('menu') || b.className.includes('menu');
            });
            
            if (menuBtn) {
                menuBtn.click();
                return { clicked: true, text: menuBtn.innerText };
            }
            return { clicked: false, button_count: buttons.length };
        }''')
        
        page.wait_for_timeout(500)
        
        # Check after click
        after_click = page.evaluate('''() => {
            const nav = document.querySelector('nav');
            const navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];
            return {
                nav_links_visible: navLinks.filter(a => {
                    const rect = a.getBoundingClientRect();
                    return rect.width > 0 && rect.height > 0;
                }).map(a => a.innerText)
            };
        }''')
        
        browser.close()
        
        return {
            'initial': menu_info,
            'click_result': click_result,
            'after_click': after_click
        }

result = check_mobile_menu()

print("\nMOBILE MENU ANALYSIS")
print("="*60)
print(f"\nMenu buttons found: {result['initial']['menu_button_count']}")
for btn in result['initial']['menu_buttons']:
    print(f"  Button: '{btn['text']}' (class: {btn['class']}, aria-label: {btn['aria_label']})")

print(f"\nNav links visible: {result['initial']['nav_links_visible']}")
print(f"Has mobile menu classes: {result['initial']['has_menu_classes']}")

print(f"\nClick attempt: {result['click_result']}")
print(f"After click - visible links: {result['after_click']['nav_links_visible']}")

if result['initial']['nav_links_visible'] == 0 and not result['click_result'].get('clicked'):
    print("\n⚠ CRITICAL: Mobile navigation links not accessible!")
    print("   No hamburger menu button found or not working")
