// Todo: Comment it
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
		// console.log(response);
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
		result = response;
	});
	return result;
}

function getByLogin(login){
	let result = [];
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://easycode-bee9.restdb.io/rest/easycode?q={"login": "' + login + '"}',
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "5ab2ab4df0a7555103cea668",
			"cache-control": "no-cache"
		}
	}

	$.ajax(settings).done(function (response) {
		result = response;
	});
	return result;
}

function checkUser(login, md5_password){
	let result = [];
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://easycode-bee9.restdb.io/rest/easycode?q={"login": "' + login + '", "password": "' + md5_password +'"}',
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "5ab2ab4df0a7555103cea668",
			"cache-control": "no-cache"
		}
	}

	$.ajax(settings).done(function (response) {
		result = response;
	});
	return result;
}	



function post(email, login, psw) {
	let status = null;
	var result = (MD5(psw));
		psw=result;
		let jsondata = {
			email: email,
			login: login,
			password: psw,
			item_one: false,
			item_two: false,
			item_three: false,
			item_four: false,
			item_five: false,
			item_six: false,
			item_seven: false,
			item_eight: false,
			item_nine: false,
			item_ten: false,
			item_eleven: false,
			item_tvelwe: false,
			item_thirteen: false,
			item_fourteen: false,
			item_fifteen: false
		};
		let settings = {
			"async": false,
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
			status = response;
		});
	return status;
}


function put(field, id, val){
	let status = null;
	var jsondata = {};
	jsondata[field] = val;
	var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://easycode-bee9.restdb.io/rest/easycode/" + id,
	"method": "PUT",
	"headers": {
		"content-type": "application/json",
		"x-apikey": "5ab2ab4df0a7555103cea668",
		"cache-control": "no-cache"
	},
	"processData": false,
	"data": JSON.stringify(jsondata)
	}

	$.ajax(settings).done(function (response) {
		status = response;
	});
	return status;
}