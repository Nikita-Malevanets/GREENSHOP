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