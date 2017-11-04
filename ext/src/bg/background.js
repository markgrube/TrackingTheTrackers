window.addEventListener('load', function(evt) {
	console.log(window.blacklist);

	chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		chrome.extension.getBackgroundPage().console.log(details.url);
	}, 
	{urls: ["<all_urls>"]}, 
	["blocking"]);
});

function addToDb(host, tracker){
    addPairToDb(host, tracker);
    addPairToDb(tracker, host);
}

function addPairToDb(string1, string2){
    var obj = {};
    obj[string1] = [];
    chrome.storage.local.get(string1, function(result){
        if (result[string1] !== undefined) {
            obj[string1] = result[string1];
        }
        if (obj[string1].indexOf(string2) === -1) {
            obj[string1].push(string2)
        }
        chrome.storage.local.set(obj);
    });
}
