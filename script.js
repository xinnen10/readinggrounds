// cursor
$(document).ready(function() {

  // MOUSE MOVEMENT
  $(document).on('mousemove', function(e) {
    var cursorExtWidth = $('#cursor-ext').width();
    var cursorWidth = $('#cursor').width();

    $('#cursor').css({
      left: e.clientX + cursorExtWidth/2 -cursorWidth/2.5,
      top: e.clientY + cursorExtWidth/2 -cursorWidth/2.5,
    });
    $('#cursor-ext').css({
      left: e.clientX,
      top: e.clientY  
    });
  })

  // HOVER
  $(document).on('mouseover', '.hover', function(e) {
    $('#cursor-ext').css({
      width: '40px',
      height: '40px'
    });
  });

  $(document).on('mouseout', '.hover', function(e) {
    $('#cursor-ext').css({
      width: '25px',
      height: '25px'
    });
  });

});

