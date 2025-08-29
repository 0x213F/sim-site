import { Router } from './utils/router.js';
import { HomeView } from './views/HomeView.js';
import { ProjectsView } from './views/ProjectsView.js';
import { BeautyView } from './views/BeautyView.js';
import { ExhibitionsView } from './views/ExhibitionsView.js';
import { ArtObjectsView } from './views/ArtObjectsView.js';
import { ContactView } from './views/ContactView.js';

class App {
    constructor() {
        this.router = new Router();
        this.mainContent = document.getElementById('main-content');
        this.views = {
            home: new HomeView(),
            projects: new ProjectsView(),
            beauty: new BeautyView(),
            exhibitions: new ExhibitionsView(),
            artObjects: new ArtObjectsView(),
            contact: new ContactView()
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
        this.router.addRoute('/contact', () => this.renderView('contact'));
        
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
                <section class="content-section">
                    <h1 class="section-title">${artistName}</h1>
                    <div style="display: grid; grid-template-columns: 400px 1fr; gap: 80px; margin-top: 40px;">
                        <div>
                            <div style="width: 100%; height: 500px; background: var(--light-gray); border: 1px solid var(--border-gray); display: flex; align-items: center; justify-content: center; color: var(--text-gray); margin-bottom: 40px;">
                                <span>Artist Portrait</span>
                            </div>
                        </div>
                        <div>
                            <div style="margin-bottom: 40px;">
                                <h3 style="font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 300; color: var(--black); margin-bottom: 20px;">About the Artist</h3>
                                <p style="font-size: 16px; color: var(--text-gray); line-height: 1.8; margin-bottom: 40px;">Detailed biography and artistic statement will be available soon. Please contact the gallery for more information about ${artistName}'s work and upcoming exhibitions.</p>
                            </div>
                            <div>
                                <h4 style="font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 300; color: var(--black); margin-bottom: 30px;">Selected Works</h4>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                                    ${Array.from({length: 3}, (_, i) => `
                                        <div style="text-align: center;">
                                            <div style="width: 100%; height: 150px; background: var(--light-gray); border: 1px solid var(--border-gray); display: flex; align-items: center; justify-content: center; color: var(--text-gray); font-size: 12px; margin-bottom: 10px;">
                                                <span>Work Image</span>
                                            </div>
                                            <p style="font-size: 12px; color: var(--text-gray);">Untitled Work ${i + 1}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
        
        this.fadeOut(() => {
            this.mainContent.innerHTML = content;
            this.fadeIn();
        });
    }

    render404() {
        const content = `
            <div class="view active">
                <section class="content-section" style="text-align: center; min-height: 80vh; display: flex; flex-direction: column; justify-content: center;">
                    <h1 style="font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 300; color: var(--black); margin-bottom: 40px;">404</h1>
                    <p style="font-size: 18px; color: var(--text-gray); margin-bottom: 40px;">The page you're looking for doesn't exist.</p>
                    <div>
                        <a href="/" class="nav-item" data-route="home" style="color: var(--black); text-decoration: underline; font-size: 16px;">Return Home</a>
                    </div>
                </section>
            </div>
        `;
        
        this.fadeOut(() => {
            this.mainContent.innerHTML = content;
            this.fadeIn();
        });
    }

    fadeOut(callback) {
        this.mainContent.style.opacity = '0';
        setTimeout(callback, 300);
    }

    fadeIn() {
        setTimeout(() => {
            this.mainContent.style.opacity = '1';
        }, 50);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

console.log('🎨 Gallery loaded successfully');
console.log('✨ Inspired by spill.net aesthetic');