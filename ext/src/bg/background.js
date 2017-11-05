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

            chrome.tabs.get(details.tabId, function(tab) {
                var website = getDomain(tab.url);

                addToDb(website, domain);
            });
        }
	}, 
	{urls: ["<all_urls>"]}, 
	["blocking"]);
});

