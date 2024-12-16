// Loading Screen

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    const minLoadingTime = 2000;

    this.setTimeout(() => {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, minLoadingTime);
})


// Function to validate the contact form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('numberError').innerText = '';



    // Get form values
    const firstname = document.getElementById('names').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('number').value.trim();

    let isValid = true;

    // Validate First Name
    if (firstname === '') {
        document.getElementById('nameError').innerText = 'First Name is required.';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Phone Number
    const phonePattern = /^\d{10}$/; // Example: 10-digit phone number
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('numberError').innerText = 'Please enter a valid phone number (10 digits).';
        isValid = false;
    }

    // If the form is valid, you can submit it or perform further actions
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can submit the form or perform any other action
        // document.getElementById('contactForm').submit();
    }
}

// Add event listener to the form
document.getElementById('forms').addEventListener('submit', validateForm);