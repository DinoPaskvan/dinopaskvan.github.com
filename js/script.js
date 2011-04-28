$(document).ready(function() {
  function badBrowser(){
	if( ($.browser.msie && parseInt($.browser.version) < 9) ||
	    ($.browser.webkit && parseInt($.browser.version) < 533) ||
	    ($.browser.mozilla && parseInt($.browser.version) < 2) ||
	    ($.browser.opera && parseInt($.browser.version) < 11))
             {return true;}
	return false;
 };
  Object.prototype.isEmpty = function() {
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) return false;
    }
    return true;
  };
  if(badBrowser()) {
    $('#warning').html('<p>Your browser is old.</p><p>How old?</p><p>Ancient in browser years.</p>Please upgrade it to view this page.');  
  } else {
    $('#warning').hide();
    $('#first').show();
    $('footer').show();
    $('nav').show();
  }
  $('#logo').hover(function() {
      $('#copyright').fadeIn('slow');
    },
    function() {
      $('#copyright').fadeOut('slow');
    }
  );
  var storedName = $.cookie('confusedTreeName');
  if(storedName.isEmpty()) {
    $('.nameC').html('<input type="text" class="name" value="[insert name]"></input>');
  } else {
    $('.nameC').html(storedName)
    $('.nameC2').html(', ' + storedName)
  }
  $('.name').change(function() {
    $.cookie('confusedTreeName', $('.name').val(), { expires: 7});
  });
  $(".name").bind("keypress", function(e) {
    if (e.keyCode == 13) {
      return false;
    };
  });  
  $(".nameC").click(function(){
    $('.nameC').html('<input type="text" class="name" value=""></input>');
    $('.name').focus();
    $('.name').change(function() {
      $.cookie('confusedTreeName', $('.name').val()), { expires: 7};
    });
    $('.name').focusout(function() {
      if($.cookie('confusedTreeName').isEmpty()) {
        $('.nameC').html('<input type="text" class="name" value="[insert name]"></input>');
        $('.nameC2').html('');
      } else {
        $('.nameC').html($.cookie('confusedTreeName'));
        $('.nameC2').html(', ' + $.cookie('confusedTreeName'));
      }
    });
  });
  
  $(document).bind("contextmenu",function(e){
    return false;
  });
  
  var enableFade = true;
  
  if(enableFade) {
    $('.color1').click(function() {
      $('#first').fadeIn(1000);
      $('#second').fadeOut(1000);
      $('#third').fadeOut(1000);
      $('#fourth').fadeOut(1000);
      $('#fifth').fadeOut(1000);
    });
    $('.color2').click(function() {
      $('#first').fadeOut(1000);
      $('#second').fadeIn(1000);
      $('#third').fadeOut(1000);
      $('#fourth').fadeOut(1000);
      $('#fifth').fadeOut(1000);
    });
    $('.color3').click(function() {
      $('#first').fadeOut(1000);
      $('#second').fadeOut(1000);
      $('#third').fadeIn(1000);
      $('#fourth').fadeOut(1000);
      $('#fifth').fadeOut(1000);
    });
    $('.color4').click(function() {
      $('#first').fadeOut(1000);
      $('#second').fadeOut(1000);
      $('#third').fadeOut(1000);
      $('#fourth').fadeIn(1000);
      $('#fifth').fadeOut(1000);
    });
    $('.color5').click(function() {
      $('#first').fadeOut(1000);
      $('#second').fadeOut(1000);
      $('#third').fadeOut(1000);
      $('#fourth').fadeOut(1000);
      $('#fifth').fadeIn(1000);
    });
  };
});