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
  })

  // HOVER
  $(document).on('mouseenter', '.hover', function(e) {
    $('#cursor-ext').css({
      width: '40px',
      height: '40px'
    });
  });

  $(document).on('mouseleave', '.hover', function(e) {
    $('#cursor-ext').css({
      width: '25px',
      height: '25px'
    });
  });

});

