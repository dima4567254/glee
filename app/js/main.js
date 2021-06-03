 $(function() {


     $('.product-tabs__item').on('click', function(e) {
         e.preventDefault(); /*отменяет работу сылки*/
         $('.product-tabs__item').removeClass('product-tabs__item--active');
         $(this).addClass('product-tabs__item--active');

         $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
         $($(this).attr('href')).addClass('product-tabs__content-item--active'); /*убирает добовляет класс*/
     });

     $('.slider__items').slick({
         dots: true,
         arrows: false,
         fade: true,
         /*
         autoplay: true,
         autoplaySpead: 1000*/

     });

     $('.product-detalis__small').slick({
         dots: false,
         arrows: false,
         asNavFor: '.product-detalis__big',
         /*объединяет слайдеры*/
         focusOnSelect: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         vertical: true,
         /*вертикальный слайдер*/
         draggable: false /*что бы не двигался*/
     });

     $('.product-detalis__big').slick({
         dots: false,
         arrows: false,
         asNavFor: '.product-detalis__small',
         draggable: false

     });

     $('.partners').slick({
         arrows: false,
         slidesToShow: 5,
         infinite: true,
         slidesToScroll: 5
     });

     $('.products__contents').slick({
         arrows: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,

     });


     $(".prise").ionRangeSlider({
         type: "double",
         grid: true,
         prefix: "$"
     });

     $(".recent-products__star").rateYo({
         rating: 4,
         starWidth: "11px",
     });

     $(".products-content__star").rateYo({
         rating: 4,
         starWidth: "18px",
         spacing: "13px" /*расстояние между звездами*/
             /* readOnli: true*/

     });

     $(".product-detalis__star").rateYo({
         rating: 4,
         starWidth: "19px",
         spacing: "11px"
     });

     $('.product-detalis__input').styler(); /*возможно точку*/




 });



 var containerEl1 = document.querySelector('[data-ref="container-1"]');
 var containerEl2 = document.querySelector('[data-ref="container-2"]');
 var containerEl3 = document.querySelector('[data-ref="container-3"]');

 var config = {
     controls: {
         scope: 'local'
     }
 };

 var mixer1 = mixitup(containerEl1, config);
 var mixer2 = mixitup(containerEl2, config);
 var mixer3 = mixitup(containerEl3, config);


 $("#rateYo").rateYo({

 });



 /* var containerEl1 = document.querySelector('[data-ref="container-1"]');
 var containerEl2 = document.querySelector('[data-ref="container-2"]');
 var containerEl3 = document.querySelector('[data-ref="container-3"]');

 var config = {
     controls: {
         scope: 'local'
     }
 };

 var mixer1 = mixitup(containerEl1, config);
 var mixer2 = mixitup(containerEl2, config);
 var mixer3 = mixitup(containerEl3, config);*/