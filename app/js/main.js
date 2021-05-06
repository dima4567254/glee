/*
const mixin1 = document.qurySelector(".products__list");

if (mixin1) {
    mixitup('.products__list', {
        selectors: {
            control: 'filter'
        }
    })
}*/
var mixer = mixitup('.products__content');

$(function() {
    var mixer = mixitup('.products__list');


    $('.slider__items').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpead: 1000
    });


    var mixer = mixitup('.products__content');

});

var mixer = mixitup('.products__list');