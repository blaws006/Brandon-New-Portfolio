$(document).ready(function () {
  console.log("Connected")
  $('.parallax').parallax();


  var options = [{
    selector: '#staggered-test',
    offset: 400,
    callback: function (el) {
      Materialize.showStaggeredList($(el));
    }
  }];

  Materialize.scrollFire(options);

$('.carousel.carousel-slider').carousel('next');
  

  //Smooth Scroll
  function scrollNav() {
    $("#nav a").not('#not').click(function () {
      //Toggle Class
      $(".active").removeClass("active");
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.' + theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 0
      }, 800);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollNav();

  //Open and closing the target
  

 
});