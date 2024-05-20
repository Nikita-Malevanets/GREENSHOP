$('.owl-carousel').owlCarousel({
    // autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:4
        }
    }
});

$( function() {
    $( "#accordion" ).accordion();
} );

// $('.owl-carousel-1').owlCarousel({
//     autoplay:true,
//     autoplayTimeout:1000,
//     loop: true,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         500:{
//             items:2
//         },
//         700:{
//             items:2
//         },
//         1100:{
//             items:4
//         }
//     }
// });
// $('.owl-carousel-2').owlCarousel({
//     autoplay:true,
//     autoplayTimeout:1000,
//     loop: true,
//     nav:true,
//
// });



/* Please ❤ this if you like it! */


(function($) { "use strict";

    //

    //Navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }();


    //Switch light/dark

    $("#switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $("#switch").removeClass("switched");
        }
        else {
            $("body").addClass("light");
            $("#switch").addClass("switched");
        }
    });

})(jQuery);

