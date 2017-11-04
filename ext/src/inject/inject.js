chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
        addToDb("tracker1", "domain1");
        chrome.storage.local.get("tracker1", function (result) {
            console.log(result["tracker1"])
        });
        chrome.storage.local.get("domain1", function (result) {
            console.log(result["domain1"])
        });
	}
	}, 10);
});

// chrome.webRequest.onBeforeRequest.addListener(function(details){
//     var
// });
