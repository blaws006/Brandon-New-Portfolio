$(document).ready(function(){
  console.log("Connected")
  $('.parallax').parallax();
  
   var options = [
      {selector: '#staggered-test', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } }
    ];
  
   Materialize.scrollFire(options);

   $('.carousel.carousel-slider').carousel({
     fullWidth: true,
     indicators: true
   });
  
  $('#port-btn').on('click', function () {
    $('.carousel.carousel-slider').carousel('next');
  });

   $('#port-btn').on('touchstart', function () {
     $('.carousel.carousel-slider').carousel('next');
   });
});

