import { Router } from './utils/router.js';
import { HomeView } from './views/HomeView.js';
import { ProjectsView } from './views/ProjectsView.js';
import { BeautyView } from './views/BeautyView.js';
import { ExhibitionsView } from './views/ExhibitionsView.js';
import { ArtObjectsView } from './views/ArtObjectsView.js';

class App {
    constructor() {
        this.router = new Router();
        this.mainContent = document.getElementById('main-content');
        this.views = {
            home: new HomeView(),
            projects: new ProjectsView(),
            beauty: new BeautyView(),
            exhibitions: new ExhibitionsView(),
            artObjects: new ArtObjectsView()
        };
        
        this.setupRoutes();
        window.router = this.router;
    }

    setupRoutes() {
        this.router.addRoute('/', () => this.renderView('home'));
        this.router.addRoute('/projects', () => this.renderView('projects'));
        this.router.addRoute('/beauty', () => this.renderView('beauty'));
        this.router.addRoute('/exhibitions', () => this.renderView('exhibitions'));
        this.router.addRoute('/art-objects', () => this.renderView('artObjects'));
        
        // Artist detail pages (placeholder)
        this.router.addRoute('/artist/elena-vasquez', () => this.renderArtistDetail('Elena Vásquez'));
        this.router.addRoute('/artist/marcus-chen', () => this.renderArtistDetail('Marcus Chen'));
        this.router.addRoute('/artist/sofia-nakamura', () => this.renderArtistDetail('Sofia Nakamura'));
        this.router.addRoute('/artist/david-okafor', () => this.renderArtistDetail('David Okafor'));
        
        // 404 route
        this.router.addRoute('/404', () => this.render404());
    }

    renderView(viewName) {
        const view = this.views[viewName];
        if (view) {
            this.fadeOut(() => {
                this.mainContent.innerHTML = view.render();
                view.init();
                this.fadeIn();
            });
        }
    }

    renderArtistDetail(artistName) {
        const content = `
            <div class="view active">
                <div class="view-content">
                    <h1 class="view-title">${artistName}</h1>
                    <div class="artist-detail">
                        <div class="artist-image">
                            <div class="placeholder-text">Artist Portrait</div>
                        </div>
                        <div class="artist-info">
                            <h3>About the Artist</h3>
                            <p>Detailed biography and artistic statement will be available soon. Please contact the gallery for more information about ${artistName}'s work and upcoming exhibitions.</p>
                            <div class="artist-works">
                                <h4>Selected Works</h4>
                                <div class="works-grid">
                                    <div class="work-item">
                                        <div class="work-thumbnail">
                                            <span class="placeholder-text">Work Image</span>
                                        </div>
                                        <p class="work-title">Untitled Work 1</p>
                                    </div>
                                    <div class="work-item">
                                        <div class="work-thumbnail">
                                            <span class="placeholder-text">Work Image</span>
                                        </div>
                                        <p class="work-title">Untitled Work 2</p>
                                    </div>
                                    <div class="work-item">
                                        <div class="work-thumbnail">
                                            <span class="placeholder-text">Work Image</span>
                                        </div>
                                        <p class="work-title">Untitled Work 3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.fadeOut(() => {
            this.mainContent.innerHTML = content;
            this.addArtistDetailStyles();
            this.fadeIn();
        });
    }

    render404() {
        const content = `
            <div class="view active">
                <div class="view-content">
                    <h1 class="view-title">Page Not Found</h1>
                    <p style="text-align: center; color: var(--accent-color); margin-top: 40px;">
                        The page you're looking for doesn't exist.
                    </p>
                    <div style="text-align: center; margin-top: 40px;">
                        <a href="/" class="nav-link" data-route="home" style="text-decoration: underline;">Return Home</a>
                    </div>
                </div>
            </div>
        `;
        
        this.fadeOut(() => {
            this.mainContent.innerHTML = content;
            this.fadeIn();
        });
    }

    addArtistDetailStyles() {
        const existingStyles = document.querySelector('#artist-detail-styles');
        if (!existingStyles) {
            const styles = `
                <style id="artist-detail-styles">
                    .artist-detail {
                        display: grid;
                        grid-template-columns: 400px 1fr;
                        gap: 60px;
                        margin-top: 40px;
                    }

                    .artist-image {
                        width: 100%;
                        height: 500px;
                        background: var(--light-gray);
                        border: 1px solid var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--accent-color);
                    }

                    .artist-info h3 {
                        font-family: 'Playfair Display', serif;
                        font-size: 24px;
                        font-weight: 300;
                        color: var(--primary-color);
                        margin-bottom: 20px;
                    }

                    .artist-info p {
                        font-size: 14px;
                        color: var(--accent-color);
                        line-height: 1.8;
                        margin-bottom: 40px;
                    }

                    .artist-info h4 {
                        font-family: 'Playfair Display', serif;
                        font-size: 20px;
                        font-weight: 300;
                        color: var(--primary-color);
                        margin-bottom: 30px;
                    }

                    .works-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px;
                    }

                    .work-item {
                        text-align: center;
                    }

                    .work-thumbnail {
                        width: 100%;
                        height: 150px;
                        background: var(--light-gray);
                        border: 1px solid var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--accent-color);
                        font-size: 12px;
                        margin-bottom: 10px;
                    }

                    .work-title {
                        font-size: 12px;
                        color: var(--text-color);
                    }

                    @media (max-width: 768px) {
                        .artist-detail {
                            grid-template-columns: 1fr;
                            gap: 40px;
                        }
                        
                        .works-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                </style>
            `;
            document.head.insertAdjacentHTML('beforeend', styles);
        }
    }

    fadeOut(callback) {
        this.mainContent.style.opacity = '0';
        this.mainContent.style.transform = 'translateY(20px)';
        setTimeout(callback, 300);
    }

    fadeIn() {
        setTimeout(() => {
            this.mainContent.style.opacity = '1';
            this.mainContent.style.transform = 'translateY(0)';
        }, 50);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

console.log('🎨 Luxury Art Gallery loaded successfully');
console.log('✨ Subverting beauty through elegant design');