chrome.tabs.query({'active': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
    document.getElementById('url').value = url;
    console.log(tabs[0]);
    var price = getPrice(url);
    document.getElementById('price').value = price;
    //document.getElementById('title').value = tabs[0].title;
});


function openTab() {
      document.getElementById('url').value = 'lol';

    chrome.tabs.create({'url': chrome.extension.getURL('popup.html'), 'selected': 'true'});
}

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
function getPrice(url) {
//var url = "https://www.amazon.com/dp/B01GHPLYMO/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=3DEXELBM6E8LD&coliid=I1ZDJ83RTFWY3I";
//var url = prompt("what is the url: ");
if (url.search('amazon')>=0) {
  console.log("this is an amazon product");
  
  request(url, function(error, response, body) {
    if(error) {
    console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);

    //gather price

    $('tr#priceblock_ourprice_row > td.a-span12').each(function( index ) {
      
    var price = $(this).find('span.a-size-medium').text().trim();
    return 30;
    console.log("Price: " + price);
    console.log("URL: " + url);
    
    fs.appendFileSync('prices.txt', price + '\n');
    });   

  });

} else {
  console.log("no amazon")
  return 0;
}

}