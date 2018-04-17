function getAll() {
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://easycode-bee9.restdb.io/rest/easycode",
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "5ab2ab4df0a7555103cea668",
			"cache-control": "no-cache",
		}
	}

	$.ajax(settings).done(function (response) {
		console.log(response);
	});
}

function getByEmail(email){
	let result = [];
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://easycode-bee9.restdb.io/rest/easycode?q={"email": "' + email + '"}',
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "5ab2ab4df0a7555103cea668",
			"cache-control": "no-cache"
		}
	}

	$.ajax(settings).done(function (response) {
		console.log(response);
		result = response;
	});
	return result;
}

function checkUser(login, password){
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://easycode-bee9.restdb.io/rest/easycode?q={"login": "' + login + '", "password": "' + MD5(password) +'"}',
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
