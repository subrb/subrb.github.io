$(document).ready(function() {
    $('.programs-link').click(function(){
          $('.dropdown').slideToggle(5);
          $('.programs-link').toggleClass('active');
      });
});
