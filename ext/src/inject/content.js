/**
 * Created by dagumya on 11/4/17.
 */


chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);


            var firstHref = $("a[href^='https']").eq(0).attr("href");
            console.log(firstHref);


        }
    }, 10);
});

