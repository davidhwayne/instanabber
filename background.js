// Instanabber
// Author: David Wayne
// Last Updated : 2016-02-17


// Create a function that will download the image from the url parse in the element
function downloadImage(element) {
    if (String(element).indexOf("http")<0) {
        alert("Please open image in a separate tab");
    }
    else{
        element=element.replace(/=2/g,":").replace(/=1/g,".");
        chrome.downloads.download({url : element.slice(element.indexOf("$")+1,element.indexOf("?"))});
        //window.open(element.slice(element.indexOf("$")+1,element.indexOf("?")));
        
    }
};

// Create a function that will add page action icon for matched urls
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With the following match rule
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // that fires when the url points to an instagram picture page
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'https://www.instagram.com/p/*/'},
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

// Call content.js when page_action button is clicked to retrieve DOM element for image
chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                downloadImage);
});