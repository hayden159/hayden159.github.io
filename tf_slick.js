// Javascript for in-browser swipeable ticket viewer
// @author stephanie hayden 8/2/2017

$(function() {
   $(document).ready(function(){
       
       
    var tickets = $('.ticket');
    console.log("tickets: "+tickets.length);
    $('.horizon').slick({
        dots:true
    });
   });
});
