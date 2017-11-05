$(function() {
    chrome.storage.local.get("trackers", function(result){
        var trackerNames = [];
        var numWebsites = [];
        if (result["trackers"] !== undefined) {
            var allTrackers = result["trackers"];

            for (var key in allTrackers) {
                if (allTrackers.hasOwnProperty(key)) {
                    trackerNames.push(key);
                    numWebsites.push(allTrackers[key].length);
                }
            }

            var trackerData = {
                labels: trackerNames,
                datasets: [
                    {
                        title: "Number of Websites", color: "light-blue",
                        values: numWebsites
                    }
                ]
            };
            new Chart({
                parent: "#trackers-chart",
                title: "Tracker Chart",
                data: trackerData,
                type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
                height: 250
            });

        }
    });

    chrome.storage.local.get("hosts", function(result){
        var websiteNames = [];
        var numTrackers = [];
        if (result["hosts"] !== undefined) {
            var allTrackers = result["hosts"];

            for (var key in allTrackers) {
                if (allTrackers.hasOwnProperty(key)) {
                    websiteNames.push(key);
                    numTrackers.push(allTrackers[key].length);
                }
            }

            var hostData = {
                labels: websiteNames,
                datasets: [
                    {
                        title: "Number of Trackers", color: "light-blue",
                        values: numTrackers
                    }
                ]
            };
            new Chart({
                parent: "#websites-chart",
                title: "Website Chart",
                data: hostData,
                type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
                height: 250
            });

        }
    });
});


