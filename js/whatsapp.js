// WhatsApp integration functionality
document.addEventListener('DOMContentLoaded', function() {
    // Track WhatsApp clicks for analytics
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"], .whatsapp-link');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp link clicked');
            // Example: gtag('event', 'click', {'event_category': 'WhatsApp', 'event_label': 'WhatsApp Chat'});
        });
    });
    
    // Add WhatsApp chat function that can be called from other elements
    window.openWhatsAppChat = function() {
        window.open('https://wa.me/2348082972030', '_blank');
    };
    
    // Add WhatsApp share functionality for products/services
    window.shareViaWhatsApp = function(text, url) {
        const shareText = encodeURIComponent(text);
        const shareUrl = encodeURIComponent(url || window.location.href);
        window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, '_blank');
    };
    
    // Add WhatsApp button to specific elements if needed
    function addWhatsAppButtons() {
        // Example: Add WhatsApp buttons to service cards
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            const whatsappBtn = document.createElement('button');
            whatsappBtn.className = 'whatsapp-service-btn';
            whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Inquire on WhatsApp';
            whatsappBtn.addEventListener('click', function() {
                const serviceName = card.querySelector('h3').textContent;
                const message = `Hello, I'm interested in your ${serviceName} service. Could you please provide more information?`;
                window.open(`https://wa.me/2348082972030?text=${encodeURIComponent(message)}`, '_blank');
            });
            
            card.appendChild(whatsappBtn);
        });
    }
    
    // Uncomment the line below if you want WhatsApp buttons on service cards
    // addWhatsAppButtons();
});

// CSS for service WhatsApp buttons (optional)
const whatsappServiceCSS = `
.whatsapp-service-btn {
    background-color: #25d366;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: background-color 0.3s;
}

.whatsapp-service-btn:hover {
    background-color: #128C7E;
}
`;

// Inject the CSS if service buttons are used
const styleSheet = document.createElement('style');
styleSheet.textContent = whatsappServiceCSS;
document.head.appendChild(styleSheet);