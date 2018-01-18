$(document).ready(function(){
  console.log("Connected")
  $('.parallax').parallax();
  
   var options = [
      {selector: '#staggered-test', offset: 800, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } }
    ];
  
   Materialize.scrollFire(options);
});

