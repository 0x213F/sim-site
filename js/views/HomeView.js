export class HomeView {
    render() {
        return `
            <div class="view active">
                <!-- Hero Section -->
                <section class="hero-section">
                    <h1 class="hero-title">Gallery is a Luxury Art Space...</h1>
                    <p class="hero-subtitle">with an international collective of artists, curators, and cultural strategists, sharing one strong creative signature</p>
                    <p class="hero-description">, grounded in a holistic approach to understanding contemporary art, beauty, and the cultural landscape. We are driven by <strong>strategic</strong> curation, <strong>design</strong> thinking and a love of the <strong>sublime</strong>.</p>
                    <div class="hero-keywords">
                        <span class="keyword">Estrange</span>
                        <span class="keyword">Quality</span>
                        <span class="keyword">Value</span>
                    </div>
                </section>

                <!-- Featured Artists Section -->
                <section class="content-section">
                    <h2 class="section-title">Featured</h2>
                    <div class="grid grid-3">
                        <div class="card artist-card" data-artist="elena-vasquez">
                            <div class="card-image">
                                <span>Artist Portrait</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Contemporary Sculpture</div>
                                <h3 class="card-title">Elena Vásquez</h3>
                                <p class="card-description">Exploring the intersection of organic forms and industrial materials through deliberate imperfection and challenging conventional notions of beauty.</p>
                            </div>
                        </div>

                        <div class="card artist-card" data-artist="marcus-chen">
                            <div class="card-image">
                                <span>Artist Portrait</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Multimedia Installation</div>
                                <h3 class="card-title">Marcus Chen</h3>
                                <p class="card-description">Creating installations that question perception and invite viewers to confront assumptions about reality and artifice.</p>
                            </div>
                        </div>

                        <div class="card artist-card" data-artist="sofia-nakamura">
                            <div class="card-image">
                                <span>Artist Portrait</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Performance & Painting</div>
                                <h3 class="card-title">Sofia Nakamura</h3>
                                <p class="card-description">Examining cultural identity through displacement, subverting traditional aesthetic hierarchies through performance and paint.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Contact Section -->
                <section class="contact-section">
                    <h2 class="contact-title">Public and Private</h2>
                    <p class="contact-subtitle">DM for meetings, viewing, estimates</p>
                    <button class="contact-button">Contact</button>
                </section>
            </div>
        `;
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('click', (event) => {
            if (event.target.matches('.artist-card') || event.target.closest('.artist-card')) {
                const card = event.target.matches('.artist-card') ? event.target : event.target.closest('.artist-card');
                const artistId = card.getAttribute('data-artist');
                if (artistId) {
                    window.router.navigate(`/artist/${artistId}`);
                }
            }
        });
    }
}