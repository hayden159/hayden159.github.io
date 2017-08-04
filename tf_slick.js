// Javascript for in-browser swipeable ticket viewer
// @author stephanie hayden 8/2/2017

$(function() {
   $(document).ready(function(){
       function longSoResize(el) {
           el.addClass('long-title');
           
        }
       
    
    $('.inside-container').css("height", window.innerHeight*0.7 );
       
    //if title is longer than 30 characters, add id to dynamically resize
    $('.event').each(function( index ) {
        console.log($(this).text().length);
      if ($(this).text().length >= 38) {
            longSoResize($(this));
      }
    });
       
    
       
       
    var tickets = $('.ticket');
    console.log("tickets: "+tickets.length);
    $('.horizon').slick({
        dots:true,
        prevArrow: false,
        nextArrow: false
    });
   });
});
