// Javascript for in-browser swipeable ticket viewer
// @author stephanie hayden 8/2/2017

$(function() {
   $(document).ready(function(){
       $(window).on('resize', function() {
          $('#quickfit').quickfit({
                min: 10,
                max: 25,
                truncate: true
            });         

        });
    $(window).trigger('resize');    
       
    var tickets = $('.ticket');
    console.log("tickets: "+tickets.length);
    $('.horizon').slick({
        dots:true,
        prevArrow: false,
        nextArrow: false
    });
   });
});
