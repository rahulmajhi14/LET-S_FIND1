 // Open the login form popup
 function openLoginForm() {
    document.getElementById("loginPopup").style.display = "flex";
}

// Close the login form popup
function closeLoginForm() {
    document.getElementById("loginPopup").style.display = "none";
}

// Function for Create Account (optional for further development)
function createAccount() {
    alert("Redirecting to Create Account page...");
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactButton').addEventListener('click', function() {
        document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
    });
});
// Open the job submission popup
function openJobPopup() {
    document.getElementById("jobPopup").style.display = "flex";
}

// Close the job submission popup
function closeJobPopup() {
    document.getElementById("jobPopup").style.display = "none";
}

// Prevent form submission and close the popup (Optional: Add AJAX for real submission)
document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Job submitted successfully!");
    closeJobPopup();
});
// Open the full-page contact form popup
function openContactPopup() {
    document.getElementById("contactPopup").style.display = "flex";
}

// Close the full-page contact form popup
function closeContactPopup() {
    document.getElementById("contactPopup").style.display = "none";
}

// Validate form before submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form field values
    const email = document.getElementById("email").value;
    const contactNo = document.getElementById("contactNo").value;

    // Email validation (must contain @)
    if (!email.includes("@")) {
        alert("Please enter a valid email address containing '@'.");
        return;
    }

    // Contact number validation (only digits allowed)
    if (!/^\d+$/.test(contactNo)) {
        alert("Please enter a valid contact number containing only digits.");
        return;
    }

    // If validation passes, show success message and close the popup
    alert("Your message has been sent!");
    closeContactPopup();
});
// Form validation for job application
document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const applicantName = document.getElementById("applicantName").value;
    const email = document.getElementById("email").value;
    const contactNo = document.getElementById("contactNo").value;
    const coverLetter = document.getElementById("coverLetter").value;

    // Basic validation
    if (!applicantName || !email.includes("@") || !/^\d+$/.test(contactNo) || !coverLetter) {
        alert("Please fill in all required fields correctly.");
        return;
    }

    // Display success message
    alert("Your application has been submitted successfully!");
    document.getElementById("jobApplicationForm").reset(); // Clear the form
});
function refreshPageEffect() {
    // Select the main content area (or the entire body if you prefer)
    const content = document.querySelector('body'); // or specific content section

    // Apply fade-out effect
    content.style.opacity = '0';
    
    // Wait briefly, then fade back in
    setTimeout(() => {
        content.style.opacity = '1';
    }, 300); // 300ms for the fade effect
}
function showServices(event) {
    event.preventDefault(); // Prevents default link behavior

    // Hide all main content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the Services section
    document.getElementById("servicesSection").style.display = "block";
}

function showMainContent() {
    // Show all main content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'block';
    });

    // Hide the Services section
    document.getElementById("servicesSection").style.display = "none";
}