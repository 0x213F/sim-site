export class ContactView {
    render() {
        return `
            <div class="view active">
                <section class="contact-section" style="min-height: 100vh; display: flex; flex-direction: column; justify-content: center;">
                    <h1 class="contact-title">Contact</h1>
                    <p class="contact-subtitle">Get in touch for meetings, viewing, and estimates</p>
                    
                    <div style="max-width: 600px; margin: 0 auto 60px; text-align: left;">
                        <div style="margin-bottom: 40px;">
                            <h3 style="font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 300; margin-bottom: 15px; color: white;">Gallery Address</h3>
                            <p style="font-size: 16px; line-height: 1.8; opacity: 0.8;">
                                123 Contemporary Art District<br>
                                New York, NY 10001<br>
                                United States
                            </p>
                        </div>
                        
                        <div style="margin-bottom: 40px;">
                            <h3 style="font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 300; margin-bottom: 15px; color: white;">Hours</h3>
                            <p style="font-size: 16px; line-height: 1.8; opacity: 0.8;">
                                Tuesday – Saturday: 10:00 – 18:00<br>
                                Sunday: 12:00 – 17:00<br>
                                Monday: Closed
                            </p>
                        </div>
                        
                        <div>
                            <h3 style="font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 300; margin-bottom: 15px; color: white;">Contact</h3>
                            <p style="font-size: 16px; line-height: 1.8; opacity: 0.8;">
                                Email: info@gallery.net<br>
                                Phone: +1 (212) 555-0123<br>
                                Private viewings by appointment
                            </p>
                        </div>
                    </div>
                    
                    <button class="contact-button">Send Message</button>
                </section>
            </div>
        `;
    }

    init() {
        // No additional initialization needed
    }
}