$(document).ready(function() {
      $('.programs-link').click(function(){
          $(this).next(".dropdown").slideToggle("fast").toggleClass('active');
      });

     $('.donate-btn').click(function(){
          $('#background-wrapper').addClass('active');
      });

     $(".modal-close").click(function(){
         $("#background-wrapper").removeClass("active");
     });

     $(".close-popup").click(function(){
         $(".pop-up").hide();
     })


});

$(document).mouseup(function(e)
{
    var container = $(".pop-up");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.hide();
    }
});
