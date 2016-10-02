chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("title").value = selection[0];
});

// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}
chrome.tabs.query({'active': true}, function (tabs) {
          /*chrome.tabs.sendMessage(tabs[0].id, {text: 'report_back'}, function(response) {
            console.log(response.response);
            document.getElementById('price').value = response.response;
          });*/

    url = tabs[0].url;
    console.log(url);
    document.getElementById('url').value = url;
    console.log(tabs[0]);
    //var price = getPrice(url);
    document.getElementById('price').value = '';
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('projectView');
    var saveBtn = document.getElementById('save');

    // onClick's logic below:
    link.addEventListener('click', function() {
        openProjectView();
    });

    saveBtn.addEventListener('click', function() {
        saveItem();
    });
});


function openProjectView() {
    //document.getElementById('url').value = 'lol';
    chrome.tabs.create({'url': chrome.extension.getURL('index.html')});
}

function saveItem() {
  console.log('hello');
        // Get a value saved in a form.
        var url = document.getElementById('url').value;
        var title = document.getElementById('title').value;
        var price = document.getElementById('price').value;
        var quantity = document.getElementById('quantity').value;

        // Check that there's some text there.
        if (!title || !price || !url || !quantity) {
          console.log('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        /*chrome.storage.sync.set({'value': theValue}, function() {
          console.log('saved');
          chrome.storage.sync.get("value", function (retVal) {
            console.log("Got it? " + retVal.value);
          });*/      
          
          var timeStamp = Date.now()
          var itemInfo = {
            title: title,
            url: url,
            price: price,
            quantity: quantity
          };
          var projects = {};
          chrome.storage.sync.get(null, function(items) {
            projects = items;
            console.log(projects);
          });
          projects[timeStamp] = itemInfo;
          chrome.storage.sync.set(projects, function() {
          console.log('saved');
          chrome.storage.sync.get(timeStamp, function (retVal) {
            console.log(retVal);
          });
          });
          
          chrome.storage.sync.get(null, function(items) {
            var allKeys = Object.keys(items);
            console.log(items);
            document.getElementById('additem').innerHTML = 'Saved!';
            //window.close();
            /*setTimeout(function(){
                window.close()
            },3000);*/
          });

}
