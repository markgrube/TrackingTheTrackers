window.addEventListener('load', function(evt) {
    var console = chrome.extension.getBackgroundPage().console;

    function getDomain(url) {
        var el = document.createElement('a');
        el.href = url;

        return el.hostname;
    }

	chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
        var domain = getDomain(details.url);

		if(window.blacklist.indexOf(domain) != -1) {
            // we found bullshit tracker!
            console.log('tracker!! ' + domain);
        }
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
