// Form and display area  
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Create a hidden Download PDF button
var downloadButton = document.createElement('button');
downloadButton.textContent = 'Download PDF';
downloadButton.style.display = 'none'; // Hide the button initially
resumeDisplayElement === null || resumeDisplayElement === void 0 ? void 0 : resumeDisplayElement.appendChild(downloadButton);
// Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect user data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Objective (hardcoded)
    var objective = "I am a good learner and want to enhance my professional growth, having leadership skill, involving managing and motivational people to achieve our individual and corporate objective.";
    // Generate resume dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Objective</h3>\n    <p>").concat(objective, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        // Show the Download PDF button after resume is generated
        downloadButton.style.display = 'inline-block';
    }
    else {
        console.error('Display Resume is Missing');
    }
});
