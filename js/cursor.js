// cursor
$(document).ready(function() {
  // MOUSE MOVEMENT
  $(document).on('mousemove', function(e) {
    $('#cursor').css({
      left: e.clientX,
      top: e.clientY,
    });
    $('#cursor-ext').css({
      left: e.clientX,
      top: e.clientY,
    });
  });

  // HOVER FUNCTION
  $('.hover').hover(
    function(){
      $('#cursor-ext').css({ width: '40px', height: '40px' });
    }, function(){
      $('#cursor-ext').css({ width: '30px', height: '30px' });
    }
  );
  
});

