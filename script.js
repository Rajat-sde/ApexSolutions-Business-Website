// Basic JavaScript for handling contact form submission feedback
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Simple client-side notification
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });
}
