// Initialize EmailJS
emailjs.init("HP76YS8sX0pe1Xx4m");

function sendEmail(event) {
    event.preventDefault(); 

    // Collect data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const school = document.getElementById("school").value;
    const grade = document.getElementById("grade").value;
    const position = document.getElementById("position").value;
    const reason = document.getElementById("reason").value.trim();
    const contribution = document.getElementById("contribution").value.trim();
    const email = document.getElementById("email").value;
    const phoneInput = document.getElementById("phone").value.trim(); 
    const countryCode = document.getElementById("country-code").value;

    // Validation
    if (!/^\d{10}$/.test(phoneInput)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    if (reason.length < 200 || contribution.length < 200) {
        alert("Text areas must be at least 200 characters.");
        return;
    }

    if (!email) {
        alert("Please enter your Email ID.");
        return;
    }

    const emailParams = {
        name: name,
        age: age,
        school: school,
        grade: grade,
        position: position,
        reason: reason,
        contribution: contribution,
        email: email,
        phone: countryCode + " " + phoneInput
    };

    emailjs.send("service_4l2j8uo", "template_e2xrumc", emailParams)
        .then(function(response) {
            alert("Your application has been submitted successfully!");
            document.getElementById("apply-form").reset(); 
        })
        .catch(function(error) {
            alert("Oops! Something went wrong.");
            console.error("FAILED...", error);
        });
}

// Function to constantly update the character counter for 200-500 range
function updateCharCounter(textarea, counter) {
    const minChars = parseInt(textarea.getAttribute("data-minchars"));
    const maxChars = textarea.getAttribute("maxlength") || 500; 
    const count = textarea.value.length;

    // Update the text to show the 200-500 range
    counter.textContent = `${count} / ${minChars}-${maxChars} characters`;

    if (count < minChars) {
        counter.classList.add("invalid");
        counter.classList.remove("valid");
    } else {
        counter.classList.remove("invalid");
        counter.classList.add("valid");
    }
}

// Live character counter initialisation
document.querySelectorAll("textarea[data-minchars]").forEach(textarea => {
    const counter = document.getElementById(`${textarea.id}-counter`);

    textarea.addEventListener("input", () => {
        updateCharCounter(textarea, counter);
    });

    // Run once on load to show initial state
    updateCharCounter(textarea, counter);
});
const phone = document.getElementById("phone");
form.addEventListener("submit", (event) => {
    if (!/^\d{10}$/.test(phone.value)) {
        event.preventDefault();
        alert("Phone number must be exactly 10 digits.");
    }
});