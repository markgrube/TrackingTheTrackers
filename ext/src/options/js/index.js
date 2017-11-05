$(function() {
    chrome.storage.local.get("trackers", function(result){
        trackerNames = [];
        numWebsites = [];
        if (result["trackers"] !== undefined) {
            var allTrackers = result["trackers"]

            for (var key in allTrackers) {
                if (allTrackers.hasOwnProperty(key)) {
                    trackerNames.push(key);
                    numWebsites.push(allTrackers[key]);
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
                title: "My Awesome Chart",
                data: trackerData,
                type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
                height: 250
            });

        }
    });
});

    // getListOfTrackers(function(result) {
    //
    //     var trackerData = {
    //         labels: result,
    //
    //         datasets: [
    //             {
    //                 title: "Number of Websites", color: "light-blue",
    //                 values: [25, 21]
    //             }
    //         ]
    //     };
    //
    //     new Chart({
    //         parent: "#trackers-chart",
    //         title: "My Awesome Chart",
    //         data: trackerData,
    //         type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
    //         height: 250
    //     });
    // });
    //
    //
    //
    //


