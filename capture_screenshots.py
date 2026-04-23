#!/usr/bin/env python3
"""
Screenshot capture script for visual analysis
"""
from playwright.sync_api import sync_playwright
import os

def capture_screenshot(url, output_path, viewport_width=1920, viewport_height=1080, wait_time=3000):
    """Capture screenshot at specified viewport"""
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})

        # Navigate and wait for network idle
        page.goto(url, wait_until='networkidle', timeout=30000)

        # Additional wait for animations and lazy loading
        page.wait_for_timeout(wait_time)

        # Capture screenshot (above-the-fold only)
        page.screenshot(path=output_path, full_page=False)
        browser.close()
        print(f"Captured: {output_path} ({viewport_width}x{viewport_height})")

if __name__ == "__main__":
    base_url = "https://unnatvega.vercel.app"
    output_dir = "/home/av/Documents/website/unnat_vega/screenshots"

    # Define viewports and pages to capture
    screenshots = [
        # Desktop - Homepage
        (f"{base_url}", f"{output_dir}/homepage-desktop.png", 1920, 1080),
        # Laptop - Homepage
        (f"{base_url}", f"{output_dir}/homepage-laptop.png", 1366, 768),
        # Tablet - Homepage
        (f"{base_url}", f"{output_dir}/homepage-tablet.png", 768, 1024),
        # Mobile - Homepage
        (f"{base_url}", f"{output_dir}/homepage-mobile.png", 375, 812),

        # Key service pages - Desktop
        (f"{base_url}/services/web-development", f"{output_dir}/services-web-desktop.png", 1920, 1080),
        (f"{base_url}/services/app-development", f"{output_dir}/services-app-desktop.png", 1920, 1080),
        (f"{base_url}/services/ui-ux-design", f"{output_dir}/services-uiux-desktop.png", 1920, 1080),

        # Key service pages - Mobile
        (f"{base_url}/services/web-development", f"{output_dir}/services-web-mobile.png", 375, 812),
        (f"{base_url}/services/app-development", f"{output_dir}/services-app-mobile.png", 375, 812),
        (f"{base_url}/services/ui-ux-design", f"{output_dir}/services-uiux-mobile.png", 375, 812),
    ]

    for url, path, width, height in screenshots:
        try:
            capture_screenshot(url, path, width, height)
        except Exception as e:
            print(f"Error capturing {url}: {e}")
