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
    addHostToDb(host, tracker);
    addTrackerToDb(host, tracker);
}

function addHostToDb(host, tracker){
    var listOfAllHosts = {};

    chrome.storage.local.get("hosts", function(result){
        if (result["hosts"] !== undefined){
            listOfAllHosts = result["hosts"];
        }

        if (listOfAllHosts[host] === undefined) {
            var item = {};
            item[host] = [tracker];
            listOfAllHosts[host] = [tracker];
        } else {
            var trackers = listOfAllHosts[host];
            if(trackers.indexOf(tracker) === -1){
                trackers.push(tracker);
            }
            listOfAllHosts[host] = trackers;
        }
        chrome.storage.local.set({"hosts": listOfAllHosts})
    });
}

function addTrackerToDb(host, tracker){
    var listOfAllTrackers = {};

    chrome.storage.local.get("trackers", function(result){
        if (result["trackers"] !== undefined){
            listOfAllTrackers = result["trackers"];
        }

        if (listOfAllTrackers[tracker] === undefined) {
            var item = {};
            item[tracker] = [host];
            listOfAllTrackers[tracker] = [host];
        } else {
            var hosts = listOfAllTrackers[host];
            if(hosts.indexOf(host) === -1){
                hosts.push(host);
            }
            listOfAllTrackers[tracker] = hosts;
        }
        chrome.storage.local.set({"trackers": listOfAllTrackers})
    });
}

function getListOfHosts(cb){
    chrome.storage.local.get("hosts", function(result){
        if (result["hosts"] === undefined){
            return [];
        }
        cb(Object.keys(result["hosts"]));
    });
}

function getListOfTrackers(cb){
    chrome.storage.local.get("trackers", function(result){
        if (result["trackers"] === undefined){
            return [];
        }
        cb(Object.keys(result["trackers"]));
    });


}


function getAllTrackersForHost(hostname){


}

function getAllHostsForTracker(tracker){


}