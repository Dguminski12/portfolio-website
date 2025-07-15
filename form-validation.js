document.addEventListener('DOMContentLoaded', function () {
    // Select all forms on the page
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            // Get form fields
            const email = form.querySelector('input[type="email"]');
            const name = form.querySelector('input[type="text"]');
            const message = form.querySelector('textarea');
            let valid = true;
            let errors = [];

            // Name validation: at least 2 letters, only letters and spaces
            if (!name || !/^[a-zA-Z\s]{2,}$/.test(name.value.trim())) {
                valid = false;
                errors.push('Please enter a valid name (letters and spaces only, at least 2 characters).');
            }

            // Email validation: simple regex
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                valid = false;
                errors.push('Please enter a valid email address.');
            }

            // Message validation: at least 5 characters
            if (!message || message.value.trim().length < 5) {
                valid = false;
                errors.push('Please enter a message (at least 5 characters).');
            }

            // If not valid, prevent submission and alert errors
            if (!valid) {
                e.preventDefault();
                alert(errors.join('\n'));
            }
        });
    });
});