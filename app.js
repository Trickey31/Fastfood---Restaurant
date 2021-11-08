var mobileMenu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');
var loginForm = document.querySelector('.login-form');

// Open/Close when choose menu
mobileMenu.onclick = function () {
    mobileMenu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = function () {
    mobileMenu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#user-login').onclick = function() {
    loginForm.classList.toggle('active');
}


$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 3,
        prevArrow: 
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: 
            "<button type='button' class='slick-next pull-righ'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
        Infinity: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
