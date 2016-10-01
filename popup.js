chrome.tabs.query({'active': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
    document.getElementById('url').value = url;
    console.log(tabs[0]);
    //document.getElementById('title').value = tabs[0].title;
});