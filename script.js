/* NAVIGATION + FOOTER */
 
(function () {
 
    const currentPage = document.body.dataset.page || 'home';
 
    // Header
    const topNav = document.getElementById('topNav');
    if (topNav) {
     
        // Logo button
        const logoBtn = document.createElement('button');
        logoBtn.className = 'logo-container';
        logoBtn.id = 'logoHomeBtn';
        logoBtn.title = 'Go to Home';
         
        logoBtn.innerHTML = `
            <img src="PowerIcon.png" alt="Power Bolt Logo" class="logo-img">
            <div class="logo-text"></div>
        `;
         
        logoBtn.addEventListener('click', function () {
        window.location.href = 'index.html';
        });
 
        // Navigation container
        const navLinks = document.createElement('nav');
        navLinks.className = 'nav-links';
         
        const navItems = [
            {
                page: 'home',
                label: 'Home',
                icon: 'fa-home',
                href: 'index.html'
            },
            {
                page: 'televisions',
                label: 'Televisions',
                icon: 'fa-tv',
                href: 'television.html'
            },
            {
                page: 'about',
                label: 'About Us',
                icon: 'fa-users',
                href: 'About Us.html'
            }
        ];
 
        navItems.forEach(function (item) {
            const btn = document.createElement('button');
            btn.className = 'nav-btn';
            btn.dataset.page = item.page;
 
            if (item.page === currentPage) {
                btn.classList.add('active');
            }
 
            btn.innerHTML = `<i class="fas ${item.icon}"></i> ${item.label}`;
             
            btn.addEventListener('click', function () {
                window.location.href = item.href;
            });
             
                navLinks.appendChild(btn);
        });
             
        topNav.appendChild(logoBtn);
        topNav.appendChild(navLinks);
    }
 
    // Footer
    const footer = document.getElementById('siteFooter');
    if (footer) {
        const year = new Date().getFullYear();
     
        footer.innerHTML = `
            <p>© ${year} <strong>Yu Rou YAP</strong></p>
            <p class="genai-note">
                <i class="fas fa-robot"></i>
                GenAI acknowledgement: GitHub Copilot assisted with coding and content structure.
            </p>
        `;
    }
 
})();