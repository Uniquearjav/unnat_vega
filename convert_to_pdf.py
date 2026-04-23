#!/usr/bin/env python3
from weasyprint import HTML
import re

# Read markdown file
with open('/home/av/Documents/website/unnat_vega/SEO_AUDIT_REPORT_UNNATVEGA.md', 'r') as f:
    md = f.read()

# Simple markdown to HTML conversion
# Convert headers
md = re.sub(r'^# (.+)$', r'<h1>\1</h1>', md, flags=re.MULTILINE)
md = re.sub(r'^## (.+)$', r'<h2>\1</h2>', md, flags=re.MULTILINE)
md = re.sub(r'^### (.+)$', r'<h3>\1</h3>', md, flags=re.MULTILINE)
md = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', md, flags=re.MULTILINE)

# Convert bold and italic
md = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', md)
md = re.sub(r'\*(.+?)\*', r'<em>\1</em>', md)

# Convert code blocks
md = re.sub(r'```(\w+)?\n(.+?)```', r'<pre><code>\2</code></pre>', md, flags=re.DOTALL)
md = re.sub(r'`(.+?)`', r'<code>\1</code>', md)

# Convert horizontal rules
md = re.sub(r'^---$', r'<hr>', md, flags=re.MULTILINE)

# Convert tables (simplified)
lines = md.split('\n')
html_lines = []
in_table = False
table_buffer = []

for line in lines:
    if '|' in line and not line.startswith('#') and not line.startswith('<'):
        if not in_table:
            in_table = True
            table_buffer = ['<table>']
        cells = [c.strip() for c in line.split('|') if c.strip()]
        if cells and not all(c.replace('-', '').replace(' ', '') == '' for c in cells):
            if len(cells) > 0 and '---' not in cells[0]:
                row_tag = 'th' if len(table_buffer) == 1 else 'td'
                table_buffer.append('<tr>' + ''.join(f'<{row_tag}>{c}</{row_tag}>' for c in cells) + '</tr>')
    else:
        if in_table:
            table_buffer.append('</table>')
            html_lines.append(''.join(table_buffer))
            in_table = False
            table_buffer = []
        html_lines.append(line)

if in_table:
    table_buffer.append('</table>')
    html_lines.append(''.join(table_buffer))

md = '\n'.join(html_lines)

# Convert lists
md = re.sub(r'^\* (.+)$', r'<li>\1</li>', md, flags=re.MULTILINE)
md = re.sub(r'(<li>.+</li>\n?)+', r'<ul>\0</ul>', md, flags=re.DOTALL)

# Wrap paragraphs
paragraphs = md.split('\n\n')
wrapped = []
for p in paragraphs:
    p = p.strip()
    if p and not p.startswith('<'):
        p = f'<p>{p}</p>'
    wrapped.append(p)

html = '\n\n'.join(wrapped)

# Wrap in HTML document
styled_html = '''
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>SEO Audit Report - Unnat Vega</title>
<style>
@page { size: A4; margin: 1.5cm; }
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 9.5pt;
    line-height: 1.5;
    color: #333;
}
h1 {
    font-size: 22pt;
    color: #1a73e8;
    border-bottom: 3px solid #1a73e8;
    padding-bottom: 8px;
    margin-top: 25px;
}
h2 {
    font-size: 14pt;
    color: #2c5aa0;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 6px;
    margin-top: 20px;
}
h3 {
    font-size: 12pt;
    color: #444;
    margin-top: 15px;
}
h4 {
    font-size: 11pt;
    color: #555;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
    font-size: 8.5pt;
}
th, td {
    border: 1px solid #ddd;
    padding: 6px;
    text-align: left;
}
th {
    background-color: #1a73e8;
    color: white;
    font-weight: 600;
}
tr:nth-child(even) {
    background-color: #f9f9f9;
}
code {
    font-family: 'Consolas', 'Monaco', monospace;
    background-color: #f4f4f4;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 8.5pt;
}
pre {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 7.5pt;
    border-left: 3px solid #1a73e8;
    white-space: pre-wrap;
    word-wrap: break-word;
}
ul {
    margin: 8px 0;
    padding-left: 20px;
}
li {
    margin: 4px 0;
}
hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 20px 0;
}
strong {
    color: #1a73e8;
}
</style>
</head>
<body>
''' + html + '''
</body>
</html>
'''

HTML(string=styled_html).write_pdf('/home/av/Documents/website/unnat_vega/SEO_AUDIT_REPORT_UNNATVEGA.pdf')
print('PDF generated successfully at: /home/av/Documents/website/unnat_vega/SEO_AUDIT_REPORT_UNNATVEGA.pdf')
