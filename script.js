// cursor
$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    var cursorExtWidth = $('#cursor-ext').width();
    var cursorWidth = $('#cursor').width();

    $('#cursor').css({
      left: e.pageX + cursorExtWidth/2 -cursorWidth/2.5,
      top: e.pageY + cursorExtWidth/2 -cursorWidth/2.5,
    });
    $('#cursor-ext').css({
      left: e.pageX,
      top: e.pageY  
    });
  })

});

