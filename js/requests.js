function getAll(){
		var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://easycode-bee9.restdb.io/rest/easycode",
	  "method": "GET",
	  "headers": {
		"content-type": "application/json",
		"x-apikey": "5ab2ab4df0a7555103cea668",
		"cache-control": "no-cache"
	  }
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});
}
