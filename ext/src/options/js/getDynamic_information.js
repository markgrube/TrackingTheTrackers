/**
 * Created by dagumya on 11/4/17.
 */
$(document).ready(function(){
    /** Get the trackers from the Database and then dynamically
     * render the the return as a dropdown list
     */
    var sample_trackers = [ "www.google.com", "www.facebook", "www.amazon.com"]
    function renderTrackers(trackers){
        trackers.forEach(function(tracker){
            var tracker_div = $("#tracker_info");


            tracker_div.append('<li class="list-group-item" >' + tracker + '</li>')
        });

    }

    /** Get the website from the Database and then dynamically
     * render the the return as a dropdown list
     */
    function renderWebsitesVisited(websites){

    }
    renderTrackers(sample_trackers);

});