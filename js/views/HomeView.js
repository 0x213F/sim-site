export class HomeView {
    render() {
        return `
            <div class="home-view view active">
                <!-- Artists Section -->
                <div class="home-section">
                    <h2 class="section-title">Featured Artists</h2>
                    <div class="artists-grid">
                        <div class="artist-card" data-artist="elena-vasquez">
                            <h3 class="artist-name">Elena Vásquez</h3>
                            <p class="artist-description">Contemporary sculptor exploring the intersection of organic forms and industrial materials. Her work challenges conventional notions of beauty through deliberate imperfection.</p>
                        </div>
                        <div class="artist-card" data-artist="marcus-chen">
                            <h3 class="artist-name">Marcus Chen</h3>
                            <p class="artist-description">Multimedia artist whose installations question the nature of perception. His pieces invite viewers to confront their assumptions about reality and artifice.</p>
                        </div>
                        <div class="artist-card" data-artist="sofia-nakamura">
                            <h3 class="artist-name">Sofia Nakamura</h3>
                            <p class="artist-description">Performance artist and painter whose work examines cultural identity through the lens of displacement. Her pieces subvert traditional aesthetic hierarchies.</p>
                        </div>
                        <div class="artist-card" data-artist="david-okafor">
                            <h3 class="artist-name">David Okafor</h3>
                            <p class="artist-description">Digital artist creating immersive experiences that blur the boundaries between virtual and physical spaces. His work critiques our relationship with technology.</p>
                        </div>
                    </div>
                </div>

                <!-- People, Places, Things Frame -->
                <div class="home-section">
                    <div class="curated-frame">
                        <h2 class="frame-title">"People, Places, Things"</h2>
                        <div class="curated-links">
                            <a href="#" class="curated-link">
                                <div class="link-title">Upcoming: Venice Biennale Preview</div>
                                <div class="link-description">Private viewing of selected works before the international exhibition</div>
                            </a>
                            <a href="#" class="curated-link">
                                <div class="link-title">Artist Talk Series</div>
                                <div class="link-description">Monthly conversations exploring contemporary practice and theory</div>
                            </a>
                            <a href="#" class="curated-link">
                                <div class="link-title">Collector's Circle</div>
                                <div class="link-description">Exclusive access to emerging artists and private studio visits</div>
                            </a>
                            <a href="#" class="curated-link">
                                <div class="link-title">Critical Essays</div>
                                <div class="link-description">Commissioned writings on art, culture, and the subversion of beauty</div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Contact Section -->
                <div class="contact-section">
                    <h2 class="contact-title">Public and Private</h2>
                    <p class="contact-subtitle">DM for meetings, viewing, estimates</p>
                    <button class="contact-button">Contact</button>
                </div>
            </div>
        `;
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('click', (event) => {
            if (event.target.matches('.artist-card')) {
                const artistId = event.target.getAttribute('data-artist');
                if (artistId) {
                    window.router.navigate(`/artist/${artistId}`);
                }
            }
        });
    }
}