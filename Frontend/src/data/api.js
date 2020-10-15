const apiUrl = '/api';


async function getPlayers() {
	let response = await fetch(apiUrl + '/players');
	let data = await response.json();
	return data;
};

async function getPlayerById(id) {	
	let response = await fetch(apiUrl + '/players/' + id);
	let data = await response.json();
	return data;
};

async function getPlayersIdAndName() {	
	let response = await fetch(apiUrl + '/players/');
	let data = await response.json();
	let result = {};
	console.log('data: ' + JSON.stringify(data));
	for(let i = 0; i < data.length; i++) {
		result[data[i].player_id] = data[i].nickname
	}
	console.log(result);
	return result;
};

async function getDaltons() {	
	let response = await fetch(apiUrl + '/daltons');
	let data = await response.json();
	return data;
};

async function getDaltonById(id) {
	if(id) {
	let response = await fetch(apiUrl + '/daltons/' + id);
	let data = await response.json();
	return data;
	} else {
		const error = new Error();
		error.info = {
			type: 'Error',
			message: 'Could not edit Dalton: '
		}
		return (error);
	}
};


async function addDalton(dalton) {	
	console.log('dalton in api function: ' + JSON.stringify(dalton));
	
	let response = await fetch(apiUrl + '/daltons', {
		method: 'POST',
		headers: {
  	'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
 		},
		body: JSON.stringify(dalton)
	});
	
	let result = await response;
	
	if(response.ok){
		return result
	} else {
		const error = new Error();
		error.info = {
			type: 'Error',
			message: 'Could not add Dalton: ' + JSON.stringify(dalton)
		}
		return (error);
	}
};

async function getAmountDaltonsPlayer(id) {	
	let response = await fetch(apiUrl + '/daltons/amountDaltonsEarned/' + id);
	let data = await response.json();
	return data;
};


export default {
	getPlayers, 
	getPlayerById, 
	getDaltons, 
	getPlayersIdAndName, 
	getAmountDaltonsPlayer,
	addDalton,
	getDaltonById
};


