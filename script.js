/* NAVIGATION + FOOTER */

(function () {
  
    const currentPage = document.body.dataset.page || 'home';

    const logoSVG =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%23fef7e0' stroke='%236b4f2c' stroke-width='4'/%3E%3Cpath d='M52 20 L32 55 L48 55 L42 82 L70 45 L54 45 L62 20 Z' fill='%23e68a2e' stroke='%236b4f2c' stroke-width='2' stroke-linejoin='round' /%3E%3Cpath d='M23 50 L18 50 M82 50 L77 50 M29 29 L26 26 M71 71 L74 74 M29 71 L26 74 M71 29 L74 26' stroke='%236b4f2c' stroke-width='3' stroke-linecap='round' /%3E%3C/svg%3E";

    // header
    const topNav = document.getElementById('topNav');
    if (topNav) {

    // Logo button (clicking returns to Home)
    const logoBtn = document.createElement('button');
    logoBtn.className = 'logo-container';
    logoBtn.id = 'logoHomeBtn';
    logoBtn.title = 'Go to Home';
    logoBtn.innerHTML = `
      <img src="${logoSVG}" alt="Power bolt logo" class="logo-img">
      <div class="logo-text"></div>`;

    logoBtn.addEventListener('click', function () {
      // JavaScript-driven navigation
      window.location.href = 'index.html';
    });

    // Nav links container
    const navLinks = document.createElement('nav');
    navLinks.className = 'nav-links';

    // Define the three nav items
    const navItems = [
      { page: 'home',        label: 'Home',        icon: 'fa-home',  href: 'index.html'},
      { page: 'televisions', label: 'Televisions', icon: 'fa-tv',    href: 'television.html'},
      { page: 'about',       label: 'About Us',    icon: 'fa-users', href: 'About Us.html'}
    ];

    // Create each nav button
    navItems.forEach(function (item) {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.dataset.page = item.page;

    // Highlight the current page
        if (item.page === currentPage) {
            btn.classList.add('active');
        }
        btn.innerHTML = `<i class="fas ${item.icon}"></i> ${item.label}`;

    // JavaScript-driven page swap
        btn.addEventListener('click', function () {
        window.location.href = item.href;
        });
        navLinks.appendChild(btn);
        });

    // Inject logo + nav into the header
        topNav.appendChild(logoBtn);
        topNav.appendChild(navLinks);
    }

    // footer 
        const footer = document.getElementById('siteFooter');
        if (footer) {
            const year = new Date().getFullYear();
            footer.innerHTML = `
            <p>© ${year} <strong>Yu Rou YAP</strong></p>
            <p class="genai-note">
                <i class="fas fa-robot"></i> GenAI acknowledgement: GitHub Copilot assisted with coding and content structure.
            </p>`;
        }
})();

