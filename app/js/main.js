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
         min: 0,
         max: 1000,
         from: 200,
         to: 500,
         grid: true
     });

     $(".star").rateYo({
         starWidth: "40px",
         rating: 3.6,
         normalFill: "#A0A0A0",
         readOnly: true
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