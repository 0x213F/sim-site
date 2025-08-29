export class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.init();
    }

    init() {
        window.addEventListener('popstate', (event) => {
            this.handleRoute(window.location.pathname);
        });

        document.addEventListener('click', (event) => {
            if (event.target.matches('a[data-route]') || event.target.closest('a[data-route]')) {
                event.preventDefault();
                const link = event.target.matches('a[data-route]') ? event.target : event.target.closest('a[data-route]');
                const route = link.getAttribute('href');
                this.navigate(route);
                
                // Close sidebar on mobile after navigation
                this.closeSidebar();
            }
        });

        // Setup hamburger menu
        this.setupHamburgerMenu();
        
        this.handleRoute(window.location.pathname);
    }

    setupHamburgerMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        
        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('expanded');
            });
            
            // Close sidebar when clicking outside on mobile
            document.addEventListener('click', (event) => {
                if (window.innerWidth <= 768 && 
                    sidebar.classList.contains('expanded') && 
                    !sidebar.contains(event.target)) {
                    sidebar.classList.remove('expanded');
                }
            });
        }
    }

    closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && window.innerWidth <= 768) {
            sidebar.classList.remove('expanded');
        }
    }

    addRoute(path, handler) {
        this.routes.set(path, handler);
    }

    navigate(path) {
        if (path !== window.location.pathname) {
            window.history.pushState({}, '', path);
        }
        this.handleRoute(path);
    }

    handleRoute(path) {
        const handler = this.routes.get(path) || this.routes.get('/404');
        
        if (handler) {
            this.currentRoute = path;
            this.updateActiveNavLink(path);
            handler();
        }
    }

    updateActiveNavLink(currentPath) {
        document.querySelectorAll('.nav-item').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
}