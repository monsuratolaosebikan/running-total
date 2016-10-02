window.onload = function () {
    chrome.storage.sync.get(null, function(items) {
            var allKeys = Object.keys(items);
            console.log(items); 
            //document.getElementById('stuff').innerText = JSON.stringify(items)            
            createTable(items);
});
}

function createTable(items) {
    var count = 1;
    var sum = 0;
    console.log(typeof items)
    for(var item in items) {
        var table = document.getElementById('items');
        var row = document.createElement('tr');
        var rowNumber = document.createElement('th');
        rowNumber.innerText = count;
        var title = document.createElement('td');
        title.innerText = items[item].title;
        var quantity = document.createElement('td');
        quantity.innerText = items[item].quantity;
        var price = document.createElement('td');
        price.innerText = '$' + items[item].price;
        var url = document.createElement('td');
        var hyperlink = document.createElement('a');
        hyperlink.setAttribute('href', items[item].url);
        hyperlink.innerText = items[item].url;
        url.appendChild(hyperlink);
        console.log(url);
        var trashBtn = document.createElement('td');
        var trashIcon = document.createElement('i');
        trashIcon.setAttribute('class', 'fa fa-trash');
        trashBtn.appendChild(trashIcon);
        console.log(trashBtn);
        table.appendChild(row);
        table.appendChild(rowNumber);
        table.appendChild(title);
        table.appendChild(quantity);
        table.appendChild(price);
        table.appendChild(url);
        table.appendChild(trashBtn);
        count++;
        sum+=parseFloat(items[item].price)*parseFloat(items[item].quantity);
    }
    var total = document.getElementById('total');
    total.innerText = 'Total: $' + sum;
}




