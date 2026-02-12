// main.js - Minimal Logic for Active States
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Simple script to handle 'active' class on click (optional)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Console confirmation
    console.log("NSUT Guide Dashboard Loaded with Hover Navigation.");
});
