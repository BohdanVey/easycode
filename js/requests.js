function getAll() {
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
		console.log(response.email);
	});
}

function GetByEmail(){
var query = getAll;
var hints = {"$max": 10, "$orderby": {"_id": -1}};
db.easycode.find(query, hints, function(err, res){
  if (!err){
  }
});
}
function post(email, login, psw) {
	


var result = (MD5(psw));
	psw=result;
	console.log(result);
	let jsondata = {
		email: email,
		login: login,
		password: psw,
		item_one: false,
		item_two: false,
		item_three: false
	};
	let settings = {
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
