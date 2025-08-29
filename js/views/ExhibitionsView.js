export class ExhibitionsView {
    render() {
        return `
            <div class="view active">
                <section class="content-section">
                    <h1 class="section-title">Exhibitions</h1>
                    <div style="text-align: center; margin-bottom: 80px;">
                        <p style="font-size: 18px; color: var(--text-gray); font-weight: 300; text-transform: uppercase; letter-spacing: 0.1em;">Estrange, Quality, Value</p>
                    </div>
                    <div class="grid grid-3">
                        <div class="card">
                            <div class="card-image">
                                <span>Exhibition Image</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Current Exhibition</div>
                                <h3 class="card-title">Fractured Mirrors</h3>
                                <p class="card-description">An exploration of self-perception through contemporary portraiture. Artists challenge traditional representation by fragmenting identity into multiple perspectives, questioning the singular nature of selfhood.</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-image">
                                <span>Video Installation</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Multimedia Experience</div>
                                <h3 class="card-title">Time Displacement</h3>
                                <p class="card-description">Video installations that manipulate temporal perception, creating spaces where past, present, and future coexist. The works challenge linear narrative and invite viewers into cyclical experiences.</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-image">
                                <span>Installation View</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Architectural Intervention</div>
                                <h3 class="card-title">Invisible Architectures</h3>
                                <p class="card-description">Large-scale installations that reveal hidden structures within familiar spaces. Artists expose the unseen frameworks that shape our daily interactions with the built environment.</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-image">
                                <span>Material Study</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Cultural Memory</div>
                                <h3 class="card-title">Material Testimonies</h3>
                                <p class="card-description">Objects that carry memory and history within their physical structure. Each piece serves as evidence of cultural transformation, preserving stories that might otherwise be forgotten.</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-image">
                                <span>Performance Documentation</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Temporal Art</div>
                                <h3 class="card-title">Ephemeral Gestures</h3>
                                <p class="card-description">Documentation of performance works that exist only in the moment of their creation. The photographs and videos become the artwork, preserving the unrepeatable act of artistic expression.</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-image">
                                <span>Sound Installation</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Immersive Audio</div>
                                <h3 class="card-title">Sonic Landscapes</h3>
                                <p class="card-description">Immersive audio environments that transform gallery spaces into alternate realities. Visitors navigate through layers of composed and found sounds, creating personal journeys through acoustic space.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    init() {
        // No additional initialization needed
    }
}