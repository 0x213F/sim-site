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
            if (event.target.matches('a[data-route]')) {
                event.preventDefault();
                const route = event.target.getAttribute('href');
                this.navigate(route);
            }
        });

        this.handleRoute(window.location.pathname);
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
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
}