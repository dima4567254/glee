 $(function() {

     $('.menu__btn').on('click', function() {
         $('.menu__items').toggleClass('menu__items--active');

     });

     $(".menu a").on("click", function(event) {
         event.preventDefault();
         var id = $(this).attr('href'),
             top = $(id).offset().top;
         $('body,html').animate({
             scrollTop: top
         }, 1500);
     });


     $('.product-tabs__item').on('click', function(e) {
         e.preventDefault();
         $('.product-tabs__item').removeClass('product-tabs__item--active');
         $(this).addClass('product-tabs__item--active');

         $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
         $($(this).attr('href')).addClass('product-tabs__content-item--active'); /*убирает добовляет класс*/
     });

     $('.trendy__items').slick({
         dots: true,
         arrows: false,
         fade: true,

         autoplay: true,
         autoplaySpead: 1000
     });

     $('.product-detalis__small').slick({
         dots: false,
         arrows: false,
         asNavFor: '.product-detalis__big',
         focusOnSelect: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         vertical: true,
         draggable: false
     });

     $('.product-detalis__big').slick({
         dots: false,
         arrows: false,
         asNavFor: '.product-detalis__small',
         draggable: false

     });


     $('.partners').slick({
         arrows: false,
         infinite: true,
         slidesToShow: 5,
         slidesToScroll: 1,
         autoplaySpeed: 2000,
         autoplay: true,


         /*variableWidth: true,*/

         responsive: [


             {
                 breakpoint: 1150,
                 settings: {
                     slidesToShow: 4,
                 }
             },
             {
                 breakpoint: 1000,
                 settings: {
                     slidesToShow: 3,
                 }
             },
             {
                 breakpoint: 620,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                 }
             },
         ]
     });


     $('.related-product').slick({
         arrows: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         prevArrow: '<button type="button"class="slick-prev"><img src="images/icons/prev-left.svg" alt=""></button>',
         nextArrow: '<button type="button"class="slick-next"><img src="images/icons/prev-right.svg" alt=""></button>'
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
         spacing: "13px"
     });

     $(".product-detalis__star").rateYo({
         rating: 4,
         starWidth: "19px",
         spacing: "11px"
     });

     $('.product-detalis__input').styler();

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

     $("#rateYo").rateYo({});
 });