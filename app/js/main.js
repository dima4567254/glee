 $(function() {

     $('.slider__items').slick({
         dots: true,
         arrows: false,
         fade: true,
         /*
         autoplay: true,
         autoplaySpead: 1000*/
     });

     $('.partners').slick({
         arrows: false,
         slidesToShow: 5,
         infinite: true,
         slidesToScroll: 5
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
             /* readOnli: true*/

     });






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