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
function postnew(email,login,passwor){
	var passwor1= CryptoJS.SHA512(passwor);
var jsondata = {email: email,login:login,password:passwor1,item_one:false,item_two:false,item_three:false};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://easycode-bee9.restdb.io/rest/easycode",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5ab2ab4df0a7555103cea668",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}