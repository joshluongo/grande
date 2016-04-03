// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Enlarge Text";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(expandText);

// The onClicked callback function.
function expandText(info, tab) {
	// Fix the text
	var sText = info.selectionText.replace(/(['"])/g, "\\$1");

	// Inject jQuery
	chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
		// Inject the proxy script
		chrome.tabs.executeScript(null, { file: "grande-prox.js" }, function() {
			// Run the function
			chrome.tabs.executeScript({
				code: 'grandeExpandText("'+sText+'")'
			});
		});
	});
}
