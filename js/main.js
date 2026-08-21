document.addEventListener("DOMContentLoaded", () => {

    // =========================
// Mobile Navigation
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");


    if (menuToggle && navMenu) {


        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });



        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function(link){

            link.addEventListener("click", function(){

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });



        document.addEventListener("click", function(event){

            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


    }

});

    // =========================
    // Current Year
    // =========================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // =========================
    // Minimum Booking Date
    // =========================

    const travelDate = document.getElementById("travelDate");

    if (travelDate) {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        travelDate.min = `${year}-${month}-${day}`;
    }


    // =========================
    // Navbar Shadow on Scroll
    // =========================

    const navbar = document.getElementById("navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 20) {
                navbar.style.boxShadow =
                    "0 8px 25px rgba(16, 32, 51, 0.08)";
            } else {
                navbar.style.boxShadow = "none";
            }

        });

    }

});