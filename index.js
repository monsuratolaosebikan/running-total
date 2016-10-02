window.onload = function () {
    chrome.storage.sync.get(null, function(items) {
            var allKeys = Object.keys(items);
            console.log('all stuff');
            console.log(items); 
            document.getElementById('stuff').innerText = JSON.stringify(items);
});
}



