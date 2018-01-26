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

  $(function(){ $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false,
  }); 
});


  //Smooth Scroll
  function scrollNav() {
    $("#nav a, .scroll-side").not('.not').not(".button-collapse").click(function () {
      //Toggle Class
      $(".active").removeClass("active");
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.' + theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
      }, 1000);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollNav();

  //Open and closing the target

  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });

});