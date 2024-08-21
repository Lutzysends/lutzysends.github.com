document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const testimonialContainer = document.getElementById('testimonialContainer');
    const addTestimonialBtn = document.getElementById('addTestimonialBtn');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });

    addTestimonialBtn.addEventListener('click', () => {
        const name = prompt('Enter your name:');
        const message = prompt('Enter your testimonial:');
        if (name && message) {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.className = 'testimonial';
            testimonialDiv.innerHTML = `<strong>${name}:</strong> <p>${message}</p>`;
            testimonialContainer.appendChild(testimonialDiv);
        }
    });
