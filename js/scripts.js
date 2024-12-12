// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

    // OPEN LOGIN FORM: When the 'login-link' is clicked, display the login modal
    document.getElementById('login-link').addEventListener('click', function() {
        document.getElementById('login-modal').style.display = 'block';
    });

    // CLOSE LOGIN FORM: When the 'close-btn' is clicked, hide the login modal
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('login-modal').style.display = 'none';
    });

    // HANDLE FORM SUBMISSION: Process login form when submitted
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission to the server
        
        // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Get status message container
        const statusMessage = document.getElementById('status-message');

        // Check if both fields are filled
        if (username && password) {
            // Clear input fields
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';

            // Replace login form with success message
            document.getElementById('login-modal').innerHTML = `
                <div class="login-container">
                    <span id="close-btn" class="close-btn">&times;</span>
                    <h3 style="text-align:center;color:#FF900E;">Success!</h3>
                    <p style="text-align:center;color:#FF900E;">You have successfully logged in!</p>
                </div>
            `;
        } else {
            alert('Please fill in both fields'); // Alert if any field is missing
        }

        // Close login form after submission
        document.getElementById('close-btn').addEventListener('click', function() {
            document.getElementById('login-modal').style.display = 'none';
        });
    });

    // COUNTER ANIMATION: Animate counter elements to increment up to their target value
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;  // Increment value for smooth animation

            if(count < target) {
                counter.innerText = Math.ceil(count + increment); // Increment counter
                setTimeout(updateCount, 20);  // Continue the animation
            } else {
                counter.innerText = target; // Ensure target value is set at the end
            }
        };
        updateCount();  // Start the counter animation
    });

    // CONTACT FORM HANDLING: Handle form submission in the contact section
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Check if all fields are filled
        if (name && email && message) {
            // Show success message upon successful form submission
            const formContainer = document.getElementById('contact-container');
            formContainer.innerHTML = '<h2>Thank you for reaching out, we will get back to you soon!</h2>';
        } else {
            alert('Please fill out all fields.'); // Alert if any field is missing
        }
    });

    // BACK TO TOP BUTTON: Show and hide the button based on scroll position
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        // Show the button when scrolling down
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
            backToTopButton.classList.remove("hide");
        } else {
            // Hide the button when scrolling up
            backToTopButton.classList.remove("show");
            backToTopButton.classList.add("hide");
        }
    });

    // SCROLL TO TOP: Smooth scroll to the top when the back-to-top button is clicked
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling effect
        });
    });

});
