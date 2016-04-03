// The injector.
function grandeExpandText(sText) {
  
  var lines = sText.split(/\n/);

  if (lines.length > 1) {
    // Has multiple new lines

    // Remove any old viewers
    $(".arabig-box-contain").remove();

    // Build the text element
    var textHtml = $('<div class="arabig-box-text" style="position: relative; top: 50%; transform: translateY(-50%);width: 80%;margin: 0 auto;height: 80%;background-color: white;font-size: 100px;position: relative;border-radius: 10px; overflow: auto;"></div>').html(htmlForTextWithEmbeddedNewlines(sText, false));
    
    // Build the container
    var newHtml = $('<div class="arabig-box-contain" style="width: 100vw;height: 100vh;top: 0;left: 0;z-index: 100000;background: rgba(0, 0, 0, 0.75);position: fixed;font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;"></div>').html(textHtml);

    // Add it to the body
    $("body").append(newHtml);

    // Add the click listener
    $(".arabig-box-contain").click(function(e) {
      // Remove any old viewers
      if($(e.target).is(".arabig-box-text")) return;

      // Fade out
      $(this).fadeOut().remove();
    });
  } else {
    // Remove any old viewers
    $(".arabig-box-contain").remove();

    // Build the text element
    var textHtml = $('<div class="arabig-box-text" style="position: relative; top: 50%; transform: translateY(-50%);width: 80%;margin: 0 auto;height: 80%;background-color: white;font-size: 100px;position: relative;border-radius: 10px; overflow: auto;"></div>').html(htmlForTextWithEmbeddedNewlines(sText, true));
    
    // Build the container
    var newHtml = $('<div class="arabig-box-contain" style="width: 100vw;height: 100vh;top: 0;left: 0;z-index: 100000;background: rgba(0, 0, 0, 0.75);position: fixed;font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;"></div>').html(textHtml);

    // Add it to the body
    $("body").append(newHtml);

    // Add the click listener
    $(".arabig-box-contain").click(function(e) {
      // Remove any old viewers
      if($(e.target).is(".arabig-box-text")) return;

      // Fade out
      $(this).fadeOut().remove();
    });
  }
};

// https://stackoverflow.com/questions/4535888/jquery-text-and-newlines
function htmlForTextWithEmbeddedNewlines(text, center) {
    var htmls = [];
    var lines = text.split(/\n/);
    // The temporary <div/> is to perform HTML entity encoding reliably.
    //
    // document.createElement() is *much* faster than jQuery('<div></div>')
    // http://stackoverflow.com/questions/268490/
    //
    // You don't need jQuery but then you need to struggle with browser
    // differences in innerText/textContent yourself
    var tmpDiv = jQuery(document.createElement('div'));
    for (var i = 0 ; i < lines.length ; i++) {
        htmls.push(tmpDiv.text(lines[i]).html());
    }

    if (center) {
      return '<span style="position: relative; top: 50%; transform: translateY(-50%); overflow: auto;">'+htmls.join("<br>")+"</span>";
    } else {
      return '<span style="overflow: auto;">'+htmls.join("<br>")+"</span>";
    }
};


