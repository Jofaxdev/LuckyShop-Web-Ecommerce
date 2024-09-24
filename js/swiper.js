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

// swiper slide product Sale_slide

var swiper = new Swiper(".sale_sec", {
    slidesPerView: 5, // Hiển thị 5 slide
    spaceBetween: 20, //Khoảng cách giữa các slide là 30px
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
    breakpoints: {
        1600: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});

var swiper = new Swiper(".product_swip", {
    slidesPerView: 4, // Hiển thị 5 slide
    spaceBetween: 20, //Khoảng cách giữa các slide là 30px
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
    breakpoints: {
        1500: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});
