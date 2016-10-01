var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://www.amazon.com/Avengers-Ultron-Childs-Hammer-Mjolnir/dp/B00SODCU6C/ref=sr_1_2?ie=UTF8&qid=1475347073&sr=8-2&keywords=mjolnir", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('tr#priceblock_ourprice_row > td.a-span12').each(function( index ) {
	  
    var price = $(this).find('span.a-size-medium').text().trim();
	
    console.log("Price: " + price);
	
    fs.appendFileSync('amazon.txt', price + '\n');
  });

});