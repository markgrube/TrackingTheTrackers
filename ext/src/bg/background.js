// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
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