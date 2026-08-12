document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!menuToggle || !navLinks) {
        alert("YRDP: Navigation elements were not found.");
        return;
    }

    menuToggle.addEventListener("click", function () {

        alert("YRDP: Menu button is working!");

        navLinks.classList.toggle("active");

    });

});
