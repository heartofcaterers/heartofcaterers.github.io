// Handle contact form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("form-status");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && email && message) {
                status.textContent = "Thank you for your message, " + name + "! We'll get back to you soon.";
                status.style.color = "green";
                form.reset();
            } else {
                status.textContent = "Please fill out all fields before submitting.";
                status.style.color = "red";
            }
        });
    }
});
