// script.js
const buyButtons = document.querySelectorAll(".buy-button");

function handleBuyClick() {
    const confirmation = confirm("Are you sure you want to buy this PC?");
    if (confirmation) {
        alert("Thank you for your purchase!");
    }
}

buyButtons.forEach(button => {
    button.addEventListener("click", handleBuyClick);
});


// newsletter


// script.js

const modal = document.getElementById("newsletterModal");
const closeButton = document.querySelector(".close");
const emailForm = document.getElementById("emailForm");

// Show modal when the page loads
window.onload = function() {
    modal.style.display = "block";
};

// Close modal when the close button is clicked
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Handle form submission
emailForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (isValidEmail(email)) {
        // Valid email, show submission message and clear form
        emailInput.classList.remove("error");
        alert("Thank you for submitting!");
        emailForm.reset();
    } else {
        // Invalid email, display error message
        emailInput.classList.add("error");
        alert("Please enter a valid email address.");
    }
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


/* form box*/

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Display a confirmation message
    const isConfirmed = confirm("Thank you for submitting your message! We will get back to you soon.");
    
    if (isConfirmed) {
        // Clear the form fields
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("question").value = "";
        
        // Hide the "thank you" message
        document.getElementById("thank-you").style.display = "none";
    }
}

// Add event listener to the form's submit button
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", handleFormSubmit);
