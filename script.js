// HAMBURGER MENU
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
}


// CONTACT FORM
const form = document.querySelector(".contact-page form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Message Sent Successfully!");

        form.reset();
    });
}


// LEARN MORE BUTTON
const learnMoreBtn = document.getElementById("learnMoreBtn");

if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function() {
        window.location.href = "about.html";
    });
}
