/**
 * Created by dagumya on 11/4/17.
 */
$(document).ready(function(){
    /** Get the trackers from the Database and then dynamically
     * render the the return as a dropdown list
     */
    var sample_trackers = getListOfTrackers(function(cb) {
        console.log(cb);

        var trackers = cb;
        var tracker_div = $("#tracker_info");

        trackers.forEach(function(tracker){
            tracker_div.append('<option>' + tracker + '</option>')
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

    /** Get the website from the Database and then dynamically
     * render the the return as a dropdown list
     */
    // function renderWebsitesVisited(websites){

    // }
    // renderTrackers(sample_trackers);

});