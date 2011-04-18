var Alphagov = {
  read_cookie: function(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  },
  delete_cookie: function(name) {
    if (document.cookie && document.cookie != '') {
      var date = new Date();
      date.setTime(date.g8etTime()-(24*60*60*1000)); // 1 day ago
      document.cookie = name + "=; expires=" + date.toGMTString() + "; domain=.alphagov.co.uk; path=/";
    }
  },
  write_permanent_cookie: function(name, value) {
    var date = new Date(2021, 12, 31);
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + date.toGMTString() + "; domain=.alphagov.co.uk; path=/";
  }
}

jQuery(document).ready(function() {

  //Setup annotator links 
  $('a.annotation').each(function(index) {
    $(this).linkAnnotator();
  });

  var has_no_tour_cookie = function() {
    return Alphagov.read_cookie('been_on_tour') == null;
  }
  var write_tour_coookie = function() {
    Alphagov.write_permanent_cookie('been_on_tour', 'true');
  }

  var launch_tour = function() {
    $('<div id="splash-back"></div>').appendTo($('body'));
    $('#splash-back').hide();
    $('#splash-back').load('/tour.html #splash', function() {
      $(document).trigger('tour-ready');
      $('#tour-close').click(close_tour);
      $('#splash-back').fadeIn();
    });
    return false
  }

  var close_tour = function() {
    $('#splash-back').fadeOut().remove();
    return false;
  }

  $('#tour-launcher').click(launch_tour);
  if (has_no_tour_cookie()) {
    write_tour_coookie();
    launch_tour();
  }
});