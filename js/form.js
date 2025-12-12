// Initialize EmailJS with your public key
emailjs.init("HP76YS8sX0pe1Xx4m");

// Function to send the email
function sendEmail(event) {
    event.preventDefault();  // Prevent default submission

    // Collect form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const school = document.getElementById("school").value;
    const grade = document.getElementById("grade").value;
    const position = document.getElementById("position").value;
    const reason = document.getElementById("reason").value.trim();
    const contribution = document.getElementById("contribution").value.trim();
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value.trim();
    const countryCode = document.getElementById("country-code").value;

    // -----------------------------------------
    // ✅ VALIDATION SECTION
    // -----------------------------------------

    // Phone number must be 10 digits
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    // 200-character minimum validation
    if (reason.length < 200) {
        alert("Your explanation for fulfilling the position must be at least 200 characters.");
        return;
    }

    if (contribution.length < 200) {
        alert("Your answer for what you can bring to Voitheia must be at least 200 characters.");
        return;
    }

    // Email is compulsory
    if (!email) {
        alert("Please enter your Email ID.");
        return;
    }

    // Prepare email parameters
    const emailParams = {
        name: name,
        age: age,
        school: school,
        grade: grade,
        position: position,
        reason: reason,
        contribution: contribution,
        email: email,
        phone: countryCode + " " + phone
    };

    // Send email using EmailJS
    emailjs.send("service_4l2j8uo", "template_moipsap", emailParams)
        .then(function(response) {
            alert("Your application has been submitted successfully!");
            console.log("SUCCESS!", response);
            document.getElementById("apply-form").reset();  // Reset the form
        })
        .catch(function(error) {
            alert("Oops! Something went wrong, please try again.");
            console.error("FAILED...", error);
        });
}

// Function to constantly update the word counter
function updateCharCounter(textarea, counter) {
    const minChars = parseInt(textarea.getAttribute("data-minchars"));
    const count = textarea.value.length;

    counter.textContent = `${count} / ${minChars} characters`;

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

    updateCharCounter(textarea, counter);
});

const phone = document.getElementById("phone");
form.addEventListener("submit", (event) => {
    if (!/^\d{10}$/.test(phone.value)) {
        event.preventDefault();
        alert("Phone number must be exactly 10 digits.");
    }
});