
// hamburger-menu

function hamburgerMenu() {
    let button = document.getElementById('menu-lines')
    let menu = document.getElementById('dropdown-menu')
    button.classList.toggle('active')
    menu.classList.toggle('active')
}

// hamburger-menu

/* //////////////////////////// elements-animation-on-cscroll ////////////////////////////// */

window.addEventListener('scroll', animated);
function animated() {
    let animated = document.querySelectorAll('.animated');
    for (let i = 0; i < animated.length; i++) {
        let windowHeight = window.innerHeight;
        let top = animated[i].getBoundingClientRect().top;
        let revealPoint = 200;

        if (top < windowHeight - revealPoint) {
            animated[i].classList.add('scrolled');
        }

        // else {
        //     animated[i].classList.remove('scrolled');
        // }
    }
}

/* //////////////////////////// elements-animation-on-cscroll ////////////////////////////// */

let list = document.querySelectorAll('#menu h5')
list.forEach(item => {
    item.addEventListener('click', (e) => {
        list.forEach(el => { el.classList.remove('active'); });
        item.classList.add('active')
    })
})


$(document).ready(function () {

    // menu-appearance-on-scroll

    $(window).scroll(function () {
        $('header').toggleClass('scrolled', $(this).scrollTop() > 80)
    })

    // menu-appearance-on-scroll


    // dropdown-list-appearance

    $('.pages div').click(function (e) {
        $('.dropdown-list').toggleClass('active');
        $('.fa-chevron-down').toggleClass('active');
        e.stopPropagation();
    })

    // dropdown-list-appearance

    // tabs

    $('#mains').click(function () {
        $('.mains').addClass('show').siblings().removeClass('show');
    })

    $('#desserts').click(function () {
        $('.desserts').addClass('show').siblings().removeClass('show');

    })

    $('#wine').click(function () {
        $('.wine').addClass('show').siblings().removeClass('show');
    })

    $('#salads').click(function () {
        $('.salads').addClass('show').siblings().removeClass('show');
    })

    $('#starters').click(function () {
        $('.starters').siblings().removeClass('show');
    })

    // tabs

    // slider

    $('.next-arrow').on('click', function () {
        let currentImg = $('.active');
        let nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }

        else {
            currentImg.removeClass('active').css('z-index', -10);
            $('.slide-image:first-child').addClass('active').css('z-index', 10);
        }
    })

    $('.previous-arrow').on('click', function () {
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }


        else {
            currentImg.removeClass('active').css('z-index', -10);
            $('.slide-image:last-child').addClass('active').css('z-index', 10);
        }

    })

    // slider


    // owl-carousel



    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        items: 3,
        margin: 40,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },

            576: {
                items: 1
            },

            768: {
                items: 2
            },

            992: {
                items: 2
            },

            1200: {
                items: 3
            }
        }
    })

    // owl-carousel

    // links color change when they are active 

    if (window.location.toString().includes("about-us")) {
        $("#about-us-link").css('color', '#C19D60')
    }

    if (window.location.toString().includes("menu")) {
        $("#menu-link").css('color', '#C19D60')
    }

    if (window.location.toString().includes("wine")) {
        $("#wine-link").css('color', '#C19D60')
    }

    if (window.location.toString().includes("contact")) {
        $("#contact-link").css('color', '#C19D60')
    }

    if (window.location.toString().includes("blog")) {
        $("#blog-link").css('color', '#C19D60')
    }


    // slide-up-down

    $(".question").click(function () {
        $(this).next(".answer").slideToggle(500);
        $(this).siblings().next(".answer").slideUp(500);
        $(this).siblings().removeClass('active')
        if (
            $(this).has(".fa-chevron-down")
        ) {
            $(this).toggleClass('active');
        }
    });

})



