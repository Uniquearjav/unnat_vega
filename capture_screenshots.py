#!/usr/bin/env python3
"""
Screenshot capture script for visual analysis
Captures desktop and mobile screenshots of key pages
"""

from playwright.sync_api import sync_playwright
import time

def capture_screenshot(url, output_path, viewport_width=1920, viewport_height=1080, wait_time=3000):
    """Capture screenshot at specified viewport size"""
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})

        # Navigate to the page
        print(f"Navigating to {url}...")
        page.goto(url, wait_until='networkidle')

        # Wait for animations to settle
        time.sleep(wait_time / 1000)

        # Capture screenshot (above-the-fold only)
        page.screenshot(path=output_path, full_page=False)
        print(f"Screenshot saved: {output_path}")

        browser.close()

def main():
    # Define viewports
    viewports = {
        'desktop': {'width': 1920, 'height': 1080},
        'laptop': {'width': 1366, 'height': 768},
        'tablet': {'width': 768, 'height': 1024},
        'mobile': {'width': 375, 'height': 812}
    }

    # Pages to capture
    pages = [
        {'path': 'https://unnatvega.vercel.app/', 'name': 'homepage'},
        {'path': 'https://unnatvega.vercel.app/#about', 'name': 'about'},
        {'path': 'https://unnatvega.vercel.app/#services', 'name': 'services'},
        {'path': 'https://unnatvega.vercel.app/#pricing', 'name': 'pricing'},
    ]

    base_output_dir = '/home/av/Documents/website/unnat_vega/screenshots'

    # Capture homepage at all viewports
    print("\n=== Capturing Homepage ===")
    for device, dims in viewports.items():
        output_path = f"{base_output_dir}/homepage_{device}_{dims['width']}x{dims['height']}.png"
        capture_screenshot(
            pages[0]['path'],
            output_path,
            dims['width'],
            dims['height']
        )

    # Capture key inner pages (desktop + mobile only)
    print("\n=== Capturing Inner Pages ===")
    for page_info in pages[1:]:
        print(f"\n--- {page_info['name'].title()} ---")

        # Desktop
        output_path = f"{base_output_dir}/{page_info['name']}_desktop_1920x1080.png"
        capture_screenshot(
            page_info['path'],
            output_path,
            viewports['desktop']['width'],
            viewports['desktop']['height']
        )

        # Mobile
        output_path = f"{base_output_dir}/{page_info['name']}_mobile_375x812.png"
        capture_screenshot(
            page_info['path'],
            output_path,
            viewports['mobile']['width'],
            viewports['mobile']['height']
        )

    print("\n=== Screenshot capture complete ===")

if __name__ == "__main__":
    main()
