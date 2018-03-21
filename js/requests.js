function getAll(){
		var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://easycode-bee9.restdb.io/rest/easycode",
	  "method": "GET",
	  "headers": {
		"content-type": "application/json",
		"x-apikey": "34f2f3085db451b7c636b2ea04d997ab0eb47",
		"cache-control": "no-cache"
	  }
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});
}