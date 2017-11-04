window.addEventListener('load', function(evt) {
	console.log(window.blacklist);

	chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		chrome.extension.getBackgroundPage().console.log(details.url);
	}, 
	{urls: ["<all_urls>"]}, 
	["blocking"]);
});

