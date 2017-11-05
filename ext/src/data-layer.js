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
        else {
            listOfAllHosts = {};
        }

        if (listOfAllHosts[host] === undefined) {
            listOfAllHosts[host] = [tracker];
        } 
        else {
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
        else {
            listOfAllTrackers = {};
        }

        if (listOfAllTrackers[tracker] === undefined) {
            listOfAllTrackers[tracker] = [host];
        } 
        else {
            var hosts = listOfAllTrackers[tracker];
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
            cb([]);
        } else {
            cb(Object.keys(result["hosts"]));
        }
    });
}

function getListOfTrackers(cb){
    chrome.storage.local.get("trackers", function(result){
        if (result["trackers"] === undefined){
            cb([]);
        } else {
            cb(Object.keys(result["trackers"]));
        }
    });
}

function getAllTrackersForHost(hostname, cb){
    chrome.storage.local.get("hosts", function(result){
        if (result["hosts"] === undefined) {
            cb([]);
        } else {
            var trackers = result["hosts"][hostname];
            if (trackers === undefined){
                cb([]);
            } else {
                cb(trackers)
            }
        }
    })
}

function getAllHostsForTracker(trackerName, cb){
    chrome.storage.local.get("trackers", function(result){
        if (result["trackers"] === undefined) {
            cb([]);
        } else {
            var hosts = result["trackers"][trackerName];
            if (hosts === undefined){
                cb([]);
            } else {
                cb(hosts)
            }
        }
    })
}