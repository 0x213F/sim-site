export class ProjectsView {
    render() {
        return `
            <div class="view active">
                <section class="content-section">
                    <h1 class="section-title">Projects</h1>
                    <div class="grid grid-2">
                        <div class="card">
                            <div class="card-image">
                                <span>Project Image</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Group Exhibition 2024</div>
                                <h3 class="card-title">Deconstructed Landscapes</h3>
                                <p class="card-description">After more than a decade of collaboration, Gallery worked together with international artists to hone the image of contemporary landscape art to accommodate who and what they have become since we first met them. The work involved strategy around key messages, an identity update, art direction, design and build of their new website. This is the third iteration of this masterful and unique practice.</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-image">
                                <span>Project Image</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Solo Exhibition 2024</div>
                                <h3 class="card-title">Uncomfortable Truths</h3>
                                <p class="card-description">A curatorial exploration challenging viewers to confront the discomfort inherent in honest artistic expression. Gallery strategized with the artist to help get the word out. Work included: Strategy, a new Visual Identity, Art Direction and Design as well as the build of their new website using the group's existing framework.</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-image">
                                <span>Project Image</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Installation 2023</div>
                                <h3 class="card-title">Material Dialogues</h3>
                                <p class="card-description">Investigation into how different materials communicate across cultural and temporal boundaries. Special attention was given to the packaging design for this small run edition, which was destined to become a collector's item. Come to Gallery if you want to see it. Work included: Art Direction, Packaging Design, Prototyping and digital tools to support and promote the initiative.</p>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-image">
                                <span>Project Image</span>
                            </div>
                            <div class="card-content">
                                <div class="card-subtitle">Digital Art 2023</div>
                                <h3 class="card-title">Digital Impermanence</h3>
                                <p class="card-description">Multimedia project exploring the ephemeral nature of digital art and virtual experiences. The artist selects emerging digital entrepreneurs from a large pool of candidates to provide funding and strategic help to young and promising creations from all sectors.</p>
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