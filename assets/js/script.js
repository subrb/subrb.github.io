$(document).ready(function() {
      $('.programs-link').click(function(){
          $('.dropdown').slideToggle(5);
          $('.programs-link').toggleClass('active');
      });

     $('.donate-btn').click(function(){
          $('#background-wrapper').addClass('active');
      });

     $(".modal-close").click(function(){
         $("#background-wrapper").removeClass("active");
     });


});
