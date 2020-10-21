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
		console.log(result)
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
	
};

const getPlayerById = (req, res) => {
	const id = parseInt(req.params.id)

	knex.select('*').from('players').where('player_id', id)
		.then((result) => {
		console.log(result)
		if(result.length === 0) {throw new Error}
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}

const getPlayersIdandName = (req, res) => {
	console.log('only getting players name and ID ')
	knex.select('player_id', 'nickname').from('players')
		.then((result) => {
		console.log(result)
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}


const getDaltons = (req, res) => {
	knex.select('*').from('daltons')
		.then((result) => {
		console.log(result)
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}

const getDaltonById = (req, res) => {
	console.log('getting daltons by id');
	const id = parseInt(req.params.id)

	knex.select('*').from('daltons').where('dalton_id', id)
		.then((result) => {
		console.log(result)
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

const getPosts = (req, res) => {
	knex.select('*').from('posts')
		.then((result) => {
		console.log(result)
		res.status(200).json(result)
	}).catch(err => {console.log(err); throw err})
}

module.exports = {
	getPlayer,
	getPlayerById,
	getPlayersIdandName,
	getDaltons,
	addDalton,
	getDaltonById,
	getPosts
};

//const countDaltonsEarned = (req, res) => {
//	const id = parseInt(req.params.id)
//	
//		client.query(
//		'SELECT person_earned_id, count(*) as "daltons_earned" from daltons WHERE person_earned_id=$1 group by person_earned_id;', [id], (error, results) => {
//    if (error) {
//      throw error
//    }
//		
//			console.log(results);
//    	res.status(200).json(results.rows)
//  })
//}