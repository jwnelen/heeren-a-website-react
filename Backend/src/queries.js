const {Client} = require('pg')
require('dotenv').config();

let options = null;

if(process.env.NODE_ENV === 'development') {
	options = {
		client: 'pg',
		connection: {
			user: process.env.USER,
			host: process.env.HOST,
			database: process.env.DATABASE_URL,
			password: process.env.PASSWORD,
		}
	}
} else {
	options = {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}
}

const knex = require('knex')(options);

knex.raw("SELECT VERSION()").then(
    (version) => console.log('connected with knex')
		).catch((err) => { console.log( err); throw err })

const getPlayer = (req, res) => {
	knex.select('*').from('players')
		.then((result) => {
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
	
};

const getPlayerById = (req, res) => {
	const id = parseInt(req.params.id)

	knex.select('*').from('players').where('player_id', id)
		.then((result) => {
		if(result.length === 0) {throw new Error}
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}

const getPlayersIdandName = (req, res) => {
	knex.select('player_id', 'nickname').from('players')
		.then((result) => {
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}


const getDaltons = (req, res) => {
	knex.select('*').from('daltons')
		.then((result) => {
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}

const getDaltonById = (req, res) => {
	const id = parseInt(req.params.id)

	knex.select('*').from('daltons').where('dalton_id', id)
		.then((result) => {
		if(result.length === 0) {throw new Error}
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}

const addDalton = (req, res) => {
	const dalton = req.body;
	
	// TODO: check correct values!
	knex.insert(dalton, 'dalton_id').into('daltons')
		.then(id => res.status(200).json(id))
		.catch(err => {console.log(err); throw err})
}

const deleteDalton = (req, res) => {
	const id = parseInt(req.params.id)
	knex('daltons').where('dalton_id', id).del()
		.then(rows => res.status(200).json(rows))
		.catch(err => {console.log(err); throw err})
}

const updateDalton = (req, res) => {
	const id = parseInt(req.params.id)
	const dalton = req.body
	
	knex('daltons')
		.where({dalton_id: id})
		.update(dalton, ['dalton_id'])
		.then(rows => res.status(200).json(rows))
		.catch(err => {console.log(err); throw err})
}

const getPosts = (req, res) => {
	knex.select('*').from('posts')
		.then((result) => {
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}

const getDaltonsTookByPlayerId = (req, res) => {
	const id = parseInt(req.params.id)
	
	knex('daltons').count('person_took_id').where({person_took_id: id})
		.then((result) => {
		if(result.length === 0) {throw new Error}
		console.log(result[0])
		res.status(200).json(result[0])
	}).catch(err => {console.log(err); throw err})
}

module.exports = {
	getPlayer,
	getPlayerById,
	getPlayersIdandName,
	getDaltons,
	addDalton,
	getDaltonById,
	deleteDalton,
	getPosts,
	updateDalton,
	getDaltonsTookByPlayerId
};