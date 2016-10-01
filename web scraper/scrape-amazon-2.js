var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = "https://www.amazon.com/dp/B01GHPLYMO/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=3DEXELBM6E8LD&coliid=I1ZDJ83RTFWY3I";

get_price();

function get_title() {
	if (url.search('amazon')>=0) {
		console.log("this is an amazon product");
		
		request(url, function(error, response, body) {
		  if(error) {
			console.log("Error: " + error);
		  }
		  console.log("Status code: " + response.statusCode);

		  var $ = cheerio.load(body);
		// gather title
		  $('div#title_feature_div').each(function( index ) {
			  
			var title = $(this).find('span.a-size-large').text().trim();
			
			//console.log("Item: " + title);
			return title
			
			//fs.appendFileSync('prices.txt', title + '\n');
		  });
		  
		});

	} else {
		console.log("no amazon")
	}
}

function get_price() {
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
			
			console.log("Price: " + price);
			return price
			//console.log("URL: " + url);
			
			//fs.appendFileSync('prices.txt', price + '\n');
		  });	  

		});

	} else {
		console.log("no amazon")
	}
}