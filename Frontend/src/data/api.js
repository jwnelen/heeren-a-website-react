const apiUrl = 'http://127.0.0.1:8000/api';
//const apiUrl = '/api';

async function getPlayers() {
	return fetch(apiUrl + '/players')
		.then(response => response.json())
		.catch((error) => console.log('error in api', error))		
};

async function getPlayerById(id) {	
	return fetch(apiUrl + '/players/' + id)
		.then(response => response.json())
		.catch((error) => console.log('error in api', error))		
};

async function getPlayersIdAndName() {	
	return fetch(apiUrl + '/players/compressed')
		.then(response => response.json())
		.then(result => {
			// computing the pairs
			let pairs = {};
			for(let i = 0; i < result.length; i++) {
				pairs[result[i].player_id] = result[i].nickname
			}
			return pairs;
		})
		.catch((error) => console.log('error in api', error))		
					
};

async function getDaltons() {	
	return fetch(apiUrl + '/daltons')
		.then(response => response.json())
		.catch((error) => console.log('error in api', error))		
};

async function getDaltonById(id) {
	if(id) {
	return fetch(apiUrl + '/daltons/' + id)
		.then(response => response.json())
		.catch((error) => console.log('error in api', error))		
	} else {
		const error = new Error();
		error.info = {
			type: 'Error',
			message: 'Could not edit Dalton: '
		}
		return (error);
	}
};

// TODO
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

async function deleteDalton(dalton) {
	console.log('dalton deletion of ' + JSON.stringify(dalton));
	
	let response = await fetch(apiUrl + '/daltons/' + dalton.dalton_id, {
		method: 'DELETE',
		headers: {
  	'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
 		},
	});
	
	let result = await response;
	if(response.ok){
		return result
	} else {
		const error = new Error();
		error.info = {
			type: 'Error',
			message: 'Could not delete Dalton: ' + JSON.stringify(dalton)
		}
		return (error);
	}
}

async function updateDalton(dalton) {
	console.log('dalton in api function: ' + JSON.stringify(dalton));
	let id = dalton.dalton_id;
	delete dalton['dalton_id']
	console.log('id in api: ' + id);
	
	let response = await fetch(apiUrl + '/daltons/' + id, {
		method: 'PUT',
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
			message: 'Could not update Dalton: ' + JSON.stringify(dalton)
		}
		return (error);
	}
}

async function getPosts() {
	return fetch(apiUrl + '/posts')
		.then(response => response.json())
		.catch((error) => console.log('error in api', error))		
};

async function getAmountDaltonsPlayer(id) {	
	return fetch(apiUrl + '/daltons' + '/amountDaltonsEarned/' + id)
		.then(response => response.json())
		.catch((error) => console.log('error in api', error))		
};


export default {
	getPlayers, 
	getPlayerById, 
	getDaltons, 
	getPlayersIdAndName, 
	getAmountDaltonsPlayer,
	addDalton,
	deleteDalton,
	updateDalton,
	getDaltonById,
	getPosts
};


