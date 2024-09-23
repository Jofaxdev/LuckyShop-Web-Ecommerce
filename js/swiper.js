// swiper slide bar

var swiper = new Swiper(".slider-swp", {
    pagination: {
        el: ".swiper-pagination",
        //Thêm dynamicBullets và clickable
        dynamicBullets: true,
        clickable: true,
    },
    //Thêm autoplay
    autoplay: {
        delay: 2500,
    },
    loop: true,
});

// swiper slide Sale_slide

var swiper = new Swiper(".sale_sec", {
    pagination: {
        el: ".swiper-pagination",
        //Thêm dynamicBullets và clickable
        dynamicBullets: true,
        clickable: true,
    },
    slidesPerView: 5, // Hiển thị 5 slide
    spaceBetween: 30, //Khoảng cách giữa các slide là 30px
    //Thêm autoplay
    autoplay: {
        delay: 3000,
    },
    //Khai báo thêm 2 nút điều hướng
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    loopFillGroupWithBlank: true,
});
