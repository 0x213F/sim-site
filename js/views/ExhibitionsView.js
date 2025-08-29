export class ExhibitionsView {
    render() {
        return `
            <div class="exhibitions-view view active">
                <div class="exhibitions-header">
                    <h1 class="view-title">Exhibitions</h1>
                    <p class="exhibitions-subtitle">Estrange, Quality, Value</p>
                </div>
                <div class="exhibitions-grid">
                    <div class="exhibition-card">
                        <div class="exhibition-media">
                            <span class="placeholder-text">Exhibition Image</span>
                        </div>
                        <div class="exhibition-content">
                            <h3 class="exhibition-title">Fractured Mirrors</h3>
                            <p class="exhibition-text">An exploration of self-perception through contemporary portraiture. Artists challenge traditional representation by fragmenting identity into multiple perspectives, questioning the singular nature of selfhood.</p>
                        </div>
                    </div>
                    
                    <div class="exhibition-card">
                        <div class="exhibition-media">
                            <span class="placeholder-text">Video Thumbnail</span>
                        </div>
                        <div class="exhibition-content">
                            <h3 class="exhibition-title">Time Displacement</h3>
                            <p class="exhibition-text">Video installations that manipulate temporal perception, creating spaces where past, present, and future coexist. The works challenge linear narrative and invite viewers into cyclical experiences.</p>
                        </div>
                    </div>
                    
                    <div class="exhibition-card">
                        <div class="exhibition-media">
                            <span class="placeholder-text">Installation View</span>
                        </div>
                        <div class="exhibition-content">
                            <h3 class="exhibition-title">Invisible Architectures</h3>
                            <p class="exhibition-text">Large-scale installations that reveal hidden structures within familiar spaces. Artists expose the unseen frameworks that shape our daily interactions with the built environment.</p>
                        </div>
                    </div>
                    
                    <div class="exhibition-card">
                        <div class="exhibition-media">
                            <span class="placeholder-text">Mixed Media</span>
                        </div>
                        <div class="exhibition-content">
                            <h3 class="exhibition-title">Material Testimonies</h3>
                            <p class="exhibition-text">Objects that carry memory and history within their physical structure. Each piece serves as evidence of cultural transformation, preserving stories that might otherwise be forgotten.</p>
                        </div>
                    </div>
                    
                    <div class="exhibition-card">
                        <div class="exhibition-media">
                            <span class="placeholder-text">Performance Documentation</span>
                        </div>
                        <div class="exhibition-content">
                            <h3 class="exhibition-title">Ephemeral Gestures</h3>
                            <p class="exhibition-text">Documentation of performance works that exist only in the moment of their creation. The photographs and videos become the artwork, preserving the unrepeatable act of artistic expression.</p>
                        </div>
                    </div>
                    
                    <div class="exhibition-card">
                        <div class="exhibition-media">
                            <span class="placeholder-text">Sound Installation</span>
                        </div>
                        <div class="exhibition-content">
                            <h3 class="exhibition-title">Sonic Landscapes</h3>
                            <p class="exhibition-text">Immersive audio environments that transform gallery spaces into alternate realities. Visitors navigate through layers of composed and found sounds, creating personal journeys through acoustic space.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    init() {
        // No additional initialization needed for this view
    }
}