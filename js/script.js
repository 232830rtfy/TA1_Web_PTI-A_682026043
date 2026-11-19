const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarMenu = document.getElementById("menuNavigasi");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        if (navbarMenu.classList.contains("show")) {

            const bootstrapCollapse =
                bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            bootstrapCollapse.hide();
        }

    });
});
