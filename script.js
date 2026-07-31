const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


// باز و بسته کردن منو
menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    mobileMenu.classList.toggle("active");

});


// بستن منو هنگام کلیک روی لینک
const menuLinks = document.querySelectorAll(".mobile-menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");

        mobileMenu.classList.remove("active");

    });

});


// انیمیشن هنگام رسیدن به بخش‌ها
const animatedElements = document.querySelectorAll(
    ".service-card, .project-card, .about-content, .stat"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    observer.observe(element);

});


// تغییر ظاهر Header هنگام اسکرول
window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 25px rgba(0, 0, 0, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});