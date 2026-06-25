document.addEventListener("DOMContentLoaded", function () {

    console.log("AaraTech Website Loaded");

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank You! Your message has been submitted successfully.");
            contactForm.reset();
        });
    }

    const careerForm = document.querySelector(".career-form");

    if (careerForm) {
        careerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Application Submitted Successfully!");
            careerForm.reset();
        });
    }

});