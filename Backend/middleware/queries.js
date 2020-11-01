const {Client} = require('pg')
require('dotenv').config({path: './config/.env'});

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


const getPosts = (req, res) => {
	knex.select('*').from('posts').orderBy('date', 'desc')
		.then((result) => {
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}

const getDaltonsTookByPlayerId = (req, res) => {
	const id = parseInt(req.params.id)
	console.log('is called');
	knex('daltons').count('person_took_id').where({person_took_id: id})
		.then((result) => {
		if(result.length === 0) {throw new Error}
		console.log(result[0])
		res.status(200).json(result[0])
	}).catch(err => {console.log(err); throw err})
}

module.exports = {
	getPosts,
	getDaltonsTookByPlayerId
};