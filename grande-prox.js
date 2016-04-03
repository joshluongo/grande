// The injector.
function grandeExpandText(sText) {
  
  	// Remove any old viewers
	$(".arabig-box-contain").remove();

	// Build the text element
  	var textHtml = $('<div class="arabig-box-text" style="top: 10%;left: 10%;width: 80%;height: 80%;display: flex;justify-content: center;align-items: center;background-color: white;font-size: 100px;position: relative;border-radius: 10px;overflow: scroll;"></div>').html(htmlForTextWithEmbeddedNewlines(sText));
  	
  	// Build the container
  	var newHtml = $('<div class="arabig-box-contain" style="width: 100vw;height: 100vh;top: 0;left: 0;z-index: 100000;background: rgba(0, 0, 0, 0.75);position: fixed;font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;"></div>').html(textHtml);

  	// Add it to the body
  	$("body").append(newHtml);

  	// Add the click listener
	$(".arabig-box-contain").click(function(e) {
		// Remove any old viewers
		if($(e.target).is(".arabig-box-text")) return;

		// Fade out
		$(this).fadeOut();
	});
};

// https://stackoverflow.com/questions/4535888/jquery-text-and-newlines
function htmlForTextWithEmbeddedNewlines(text) {
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
    return htmls.join("<br>");
};
