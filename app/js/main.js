 $(function() {

      
     
      $('.slider__items').slick({
          dots: true,
          arrows: false,
          fade: true,
          autoplay: true,
          autoplaySpead: 1000
      });

      $('.partners').slick({
          arrows: false,
          slidesToShow: 5,
          infinite: true,
          slidesToScroll: 5
      });




 });

 

   var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);