// Instanabber
// Author: David Wayne
// Last Updated : 2016-02-17

// Listen for page_action clicks
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    // If the received message has the expected format
    if (msg.text && (msg.text == "report_back")) {
        // Return the DOM content in callback
        sendResponse(document.getElementsByClassName("_ovg3g")[0].getAttribute("data-reactid"));
    }
});