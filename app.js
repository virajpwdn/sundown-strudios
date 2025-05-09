const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function pageAnimation(){
    let faq = document.querySelector(".faq-container");
    let fixed = document.querySelector(".fixed-image");
    faq.addEventListener("mouseenter", function() {
        fixed.style.display = "block";
});

    faq.addEventListener("mouseleave", function() {
        fixed.style.display = "none";
})

    let faqs = document.querySelectorAll(".faq");
    faqs.forEach(function(e){
        e.addEventListener("mouseenter", function() {
        let image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    });
});
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function menuAnimation(){
    let menu = document.querySelector("nav h3");
    let scr = document.querySelector(".full-scr");
    let navimg = document.querySelector("nav img");
    let flag = 0;
    menu.addEventListener("click", function(){
        if(flag == 0) {
            scr.style.top = 0;
            navimg.style.opacity = 0;
            flag = 1;
        } else {
            scr.style.top = "-100%";
            navimg.style.opacity = 1;
            flag = 0;
        }
    });
};

swiperAnimation();
pageAnimation();
// menuAnimation();

let loader = document.querySelector(".loader");
setTimeout(function(){
    loader.style.top = "-100%";
}, 4000)