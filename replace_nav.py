import os, re
html_files = ['index.html', 'shop.html', 'nutrition.html', 'consultation.html', 'about.html', 'blog.html']
nav_actions = '''<div class="nav-actions">
            <button id="openCartBtn" class="nav-icon-btn">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span id="cartBadge" class="cart-count">0</span>
            </button>
            <div class="user-dropdown">
              <button class="nav-icon-btn user-btn">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </button>
              <div class="dropdown-menu">
                <a href="myorder.html">Đơn hàng của tôi</a>
                <a href="profile.html">Thông tin cá nhân</a>
              </div>
            </div>
          </div>'''

for f in html_files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        pattern = re.compile(r'<a class="nav-cta" href="[^"]+">[^<]+</a>\s*(</div>\s*</nav>)')
        new_content = pattern.sub(nav_actions + r'\n        \1', content)
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
