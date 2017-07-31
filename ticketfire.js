
  class ticket_dot_pair {
      constructor(ticket, dot){
          this.ticket = ticket;
          this.dot = dot;
      }
  }

  var tickets = $('.ticket');
  tickets.first().show(); 
  console.log("tickets: "+tickets.length);
    
  var dot = $('#footer span');
  dot.addClass('active'); 
  dot.detach();


  ticket_dot_arr = [];
  
  tickets.each(function( index, ticket ) {
      console.log(ticket);
      
      newDot = dot.clone().removeClass('active');
      newDot.appendTo('#footer');
      
      ticket_dot_arr[index] = (new ticket_dot_pair(ticket, newDot))

      var bodyRect = document.body.getBoundingClientRect();
      
  });

   $('.inside-container').on("swipe", function(){
          console.log('scroll event');
          tickets.each(function(index, ticket){
            var ticketRect = ticket.getBoundingClientRect();
            var offset   = ticketRect.left - bodyRect.left;
            if (offset <= 100) {
              $('#footer span').removeClass('active');
              ticket_dot_arr[index].dot.addClass('active');
            }
          });
      })

  ticket_dot_arr[0].dot.addClass('active');
  
  
     
