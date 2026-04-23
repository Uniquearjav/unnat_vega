from playwright.sync_api import sync_playwright

def check_page(url):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})
        
        try:
            response = page.goto(url, wait_until='networkidle', timeout=15000)
            status = response.status if response else 0
            title = page.title()
            
            # Check for 404 indicators
            is_404 = page.evaluate('''() => {
                const h1 = document.querySelector('h1');
                return h1 && (h1.innerText.includes('404') || h1.innerText.includes('Not Found'));
            }''')
            
            return {
                'url': url,
                'status': status,
                'title': title,
                'is_404': is_404
            }
        except Exception as e:
            return {'url': url, 'error': str(e)}
        finally:
            browser.close()

pages = [
    "https://unnatvega.vercel.app/",
    "https://unnatvega.vercel.app/about",
    "https://unnatvega.vercel.app/services",
    "https://unnatvega.vercel.app/portfolio",
    "https://unnatvega.vercel.app/contact",
    "https://unnatvega.vercel.app/performance",
    "https://unnatvega.vercel.app/growth",
]

print("\nPAGE AVAILABILITY CHECK")
print("="*70)

for page_url in pages:
    result = check_page(page_url)
    if 'error' in result:
        print(f"ERROR: {page_url} - {result['error']}")
    else:
        status_icon = "✓" if result['status'] == 200 and not result['is_404'] else "✗"
        status_text = "OK" if result['status'] == 200 and not result['is_404'] else f"{result['status']}/404"
        print(f"{status_icon} {page_url} - {status_text}")
        print(f"   Title: {result['title'][:60]}...")

print("="*70)
