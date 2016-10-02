chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "pagedetails" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }

document.addEventListener('DOMContentLoaded', function() {
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);

});

function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}