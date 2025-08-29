export class ArtObjectsView {
    render() {
        return `
            <div class="view active">
                <div class="view-content">
                    <h1 class="view-title">Art Objects</h1>
                    <div class="objects-grid">
                        <div class="object-card">
                            <div class="object-media">
                                <div class="placeholder-text">Object Image</div>
                            </div>
                            <div class="object-content">
                                <h3 class="object-title">Untitled (Reconstruction #3)</h3>
                                <p class="object-artist">Elena Vásquez</p>
                                <p class="object-medium">Mixed media, steel, concrete</p>
                                <p class="object-dimensions">120 × 80 × 45 cm</p>
                                <p class="object-description">A sculptural intervention that combines industrial materials with organic forms, questioning the boundaries between natural and artificial creation.</p>
                            </div>
                        </div>
                        
                        <div class="object-card">
                            <div class="object-media">
                                <div class="placeholder-text">Object Image</div>
                            </div>
                            <div class="object-content">
                                <h3 class="object-title">Memory Palace III</h3>
                                <p class="object-artist">Marcus Chen</p>
                                <p class="object-medium">Digital projection, mirrors</p>
                                <p class="object-dimensions">Dimensions variable</p>
                                <p class="object-description">An interactive installation that reflects fragmented memories, inviting viewers to question the reliability of their own recollections.</p>
                            </div>
                        </div>
                        
                        <div class="object-card">
                            <div class="object-media">
                                <div class="placeholder-text">Object Image</div>
                            </div>
                            <div class="object-content">
                                <h3 class="object-title">Displaced Territories</h3>
                                <p class="object-artist">Sofia Nakamura</p>
                                <p class="object-medium">Acrylic, canvas, fabric</p>
                                <p class="object-dimensions">200 × 150 cm</p>
                                <p class="object-description">A painting that incorporates traditional textile elements, exploring themes of cultural displacement and the preservation of heritage through material.</p>
                            </div>
                        </div>
                        
                        <div class="object-card">
                            <div class="object-media">
                                <div class="placeholder-text">Object Image</div>
                            </div>
                            <div class="object-content">
                                <h3 class="object-title">Neural Networks</h3>
                                <p class="object-artist">David Okafor</p>
                                <p class="object-medium">Arduino, LED, sensors</p>
                                <p class="object-dimensions">300 × 200 × 50 cm</p>
                                <p class="object-description">A responsive sculpture that changes based on viewer interaction, creating a dialogue between human presence and technological response.</p>
                            </div>
                        </div>
                        
                        <div class="object-card">
                            <div class="object-media">
                                <div class="placeholder-text">Object Image</div>
                            </div>
                            <div class="object-content">
                                <h3 class="object-title">Temporal Fragments</h3>
                                <p class="object-artist">Elena Vásquez</p>
                                <p class="object-medium">Bronze, glass, photography</p>
                                <p class="object-dimensions">85 × 60 × 30 cm</p>
                                <p class="object-description">A mixed-media work that combines historical photographs with contemporary materials, creating a conversation across time.</p>
                            </div>
                        </div>
                        
                        <div class="object-card">
                            <div class="object-media">
                                <div class="placeholder-text">Object Image</div>
                            </div>
                            <div class="object-content">
                                <h3 class="object-title">Infinite Recursion</h3>
                                <p class="object-artist">Marcus Chen</p>
                                <p class="object-medium">Video, monitor, code</p>
                                <p class="object-dimensions">Single channel HD video</p>
                                <p class="object-description">A generative video piece that creates endless variations on a theme, questioning the nature of originality in digital art.</p>
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
                .objects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 50px;
                    margin-top: 40px;
                }

                .object-card {
                    background: var(--secondary-color);
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                    transition: var(--transition);
                }

                .object-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }

                .object-media {
                    width: 100%;
                    height: 250px;
                    background: var(--light-gray);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-color);
                    font-size: 14px;
                }

                .object-content {
                    padding: 30px;
                }

                .object-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 20px;
                    font-weight: 400;
                    color: var(--primary-color);
                    margin-bottom: 8px;
                }

                .object-artist {
                    font-size: 14px;
                    color: var(--text-color);
                    font-weight: 400;
                    margin-bottom: 5px;
                }

                .object-medium,
                .object-dimensions {
                    font-size: 12px;
                    color: var(--accent-color);
                    margin-bottom: 3px;
                }

                .object-description {
                    font-size: 13px;
                    color: var(--accent-color);
                    line-height: 1.8;
                    margin-top: 15px;
                }

                @media (max-width: 768px) {
                    .objects-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }
            </style>
        `;
    }

    init() {
        const existingStyles = document.querySelector('#art-objects-styles');
        if (!existingStyles) {
            const styleElement = document.createElement('div');
            styleElement.id = 'art-objects-styles';
            styleElement.innerHTML = this.getStyles();
            document.head.appendChild(styleElement);
        }
    }
}