document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MOBILE NAVIGATION
       ========================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu after clicking a link */

        const links =
            navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /* ==========================================
       CURRENT YEAR
       ========================================== */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });



    /* ==========================================
       CONTACT FORM
       ========================================== */

    const forms =
        document.querySelectorAll(".contact-form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            /*
             * The form is not connected to a backend yet.
             * Prevent the page from reloading for now.
             */

            if (form.getAttribute("action") === "#") {

                event.preventDefault();

                alert(
                    "Thank you for contacting YRDP. " +
                    "The contact form will be connected soon."
                );

            }

        });

    });



    /* ==========================================
       SMOOTH SCROLLING
       ========================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });

});