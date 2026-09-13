const form = document.querySelector(".contact-page form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Message Sent Successfully!");

        form.reset();
    });
}

const learnMoreBtn = document.getElementById("learnMoreBtn");

if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function() {
        window.location.href = "about.html";
    });
}