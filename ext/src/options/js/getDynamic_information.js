/**
 * Created by dagumya on 11/4/17.
 */
$(document).ready(function(){
    /** Get the trackers from the Database and then dynamically
     * render the the return as a dropdown list
     */
    getListOfTrackers(function(cb) {
        var trackers = cb;
        var tracker_div = $("#tracker_info");

        trackers.forEach(function(tracker){
            tracker_div.append('<option>' + tracker + '</option>');
        });

        $("#tracker_info").change(changeHandler);

        function changeHandler(evt) {
            var tracker = $("#tracker_info").val();
            var list = $('#website-list');

            getAllHostsForTracker(tracker, function(websites) {
                list.empty();
                console.log(websites);
                websites.forEach(function(website) {
                    list.append("<li class='list-item'>" + website + "</li>")
                })
            });
        }

        changeHandler(null);
    });

    getListOfHosts(function(hosts) {
        var host_select = $('#websites_info');

        hosts.forEach(function(host) {
            host_select.append('<option>' + host + '</option>');
        });

        host_select.change(changeHandler);

        function changeHandler(evt) {
            var host = host_select.val();
            var list = $('#tracker-list');

            getAllTrackersForHost(host, function(trackers) {
                list.empty();

                trackers.forEach(function(tracker) {
                    list.append('<li>' + tracker + '</li>');
                });
            });
        }

        changeHandler(null);
    });

    /** Get the website from the Database and then dynamically
     * render the the return as a dropdown list
     */
    // function renderWebsitesVisited(websites){

    // }
    // renderTrackers(sample_trackers);

});