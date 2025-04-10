function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Reset error message
    errorMessage.textContent = '';

    // Basic validation
    if (name.length < 2) {
        errorMessage.textContent = 'Name must be at least 2 characters long.';
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    if (message.length < 10) {
        errorMessage.textContent = 'Message must be at least 10 characters long.';
        return false;
    }

    // If validation passes
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
    return true;
}
