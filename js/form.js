// Initialize EmailJS with your public key
emailjs.init("HP76YS8sX0pe1Xx4m");

// Function to send the email
function sendEmail(event) {
    event.preventDefault();  // Prevent the form from submitting the default way

    // Collect form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const school = document.getElementById("school").value;
    const grade = document.getElementById("grade").value;
    const position = document.getElementById("position").value;
    const reason = document.getElementById("reason").value;
    const contribution = document.getElementById("contribution").value;
    const experience = document.getElementById("experience").value;

    // Prepare email parameters
    const emailParams = {
        name: name,
        age: age,
        school: school,
        grade: grade,
        position: position,
        reason: reason,
        contribution: contribution,
        experience: experience
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
