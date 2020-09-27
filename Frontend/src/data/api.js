const apiUrl = 'http://127.0.0.1:8000/players';


async function getPlayers() {
	let response = await fetch(apiUrl);
	let data = await response.json();
	return data;
};

async function getPlayerById(id) {	
	let response = await fetch(apiUrl + '/' + id);
	let data = await response.json();
	return data;
};

export default {getPlayers, getPlayerById};


