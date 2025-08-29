// Main JavaScript file for the static website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    init();
});

function init() {
    // Set up smooth scrolling
    setupSmoothScrolling();
    
    // Display branch information
    displayBranchInfo();
    
    // Set up button interactions
    setupButtonInteractions();
    
    // Add some interactive animations
    setupAnimations();
}

function setupSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function displayBranchInfo() {
    // Get branch info from URL or set defaults
    const currentBranch = getBranchFromURL() || 'main';
    const deployURL = getDeployURL();
    
    // Update the display elements
    const branchElement = document.getElementById('current-branch');
    const urlElement = document.getElementById('deploy-url');
    
    if (branchElement) {
        branchElement.textContent = currentBranch;
    }
    
    if (urlElement) {
        urlElement.textContent = deployURL;
    }
}

function getBranchFromURL() {
    // Extract branch name from GitHub Pages URL structure
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // For GitHub Pages: username.github.io/repo-name/branch-name
    if (hostname.includes('github.io')) {
        const pathParts = pathname.split('/').filter(part => part !== '');
        if (pathParts.length > 1) {
            return pathParts[1]; // Second part is usually the branch
        }
    }
    
    return 'main'; // Default branch
}

function getDeployURL() {
    return window.location.href;
}

function setupButtonInteractions() {
    // CTA Button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Add a nice click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Show an alert or perform an action
            showNotification('Welcome! This is your static website.');
        });
    }
}

function setupAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Utility function to detect if user prefers reduced motion
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Add some console info for developers
console.log('🚀 Static Website loaded successfully!');
console.log('📦 Repository: Multi-branch GitHub Pages deployment');
console.log('🌟 Features: Responsive design, automated deployment, smooth animations');