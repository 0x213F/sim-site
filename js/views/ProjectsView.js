export class ProjectsView {
    render() {
        return `
            <div class="view active">
                <div class="view-content">
                    <h1 class="view-title">Projects</h1>
                    <div class="projects-grid">
                        <div class="project-card">
                            <div class="project-media">
                                <div class="placeholder-text">Project Image</div>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">Deconstructed Landscapes</h3>
                                <p class="project-description">A curatorial exploration of how contemporary artists reimagine natural environments through fragmentation and reconstruction.</p>
                                <div class="project-meta">
                                    <span class="project-year">2024</span>
                                    <span class="project-type">Group Exhibition</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="project-card">
                            <div class="project-media">
                                <div class="placeholder-text">Project Image</div>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">Uncomfortable Truths</h3>
                                <p class="project-description">Solo exhibition challenging viewers to confront the discomfort inherent in honest artistic expression.</p>
                                <div class="project-meta">
                                    <span class="project-year">2024</span>
                                    <span class="project-type">Solo Exhibition</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="project-card">
                            <div class="project-media">
                                <div class="placeholder-text">Project Image</div>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">Material Dialogues</h3>
                                <p class="project-description">Investigation into how different materials communicate across cultural and temporal boundaries.</p>
                                <div class="project-meta">
                                    <span class="project-year">2023</span>
                                    <span class="project-type">Installation</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="project-card">
                            <div class="project-media">
                                <div class="placeholder-text">Project Image</div>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">Digital Impermanence</h3>
                                <p class="project-description">Multimedia project exploring the ephemeral nature of digital art and virtual experiences.</p>
                                <div class="project-meta">
                                    <span class="project-year">2023</span>
                                    <span class="project-type">Digital Art</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getStyles() {
        return `
            <style>
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 60px;
                    margin-top: 40px;
                }

                .project-card {
                    background: var(--secondary-color);
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                    transition: var(--transition);
                }

                .project-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
                }

                .project-media {
                    width: 100%;
                    height: 300px;
                    background: var(--light-gray);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-color);
                    font-size: 14px;
                }

                .project-content {
                    padding: 40px;
                }

                .project-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 24px;
                    font-weight: 400;
                    color: var(--primary-color);
                    margin-bottom: 20px;
                }

                .project-description {
                    font-size: 14px;
                    color: var(--accent-color);
                    line-height: 1.8;
                    margin-bottom: 30px;
                }

                .project-meta {
                    display: flex;
                    gap: 20px;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--accent-color);
                }

                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }
            </style>
        `;
    }

    init() {
        const existingStyles = document.querySelector('#projects-styles');
        if (!existingStyles) {
            const styleElement = document.createElement('div');
            styleElement.id = 'projects-styles';
            styleElement.innerHTML = this.getStyles();
            document.head.appendChild(styleElement);
        }
    }
}