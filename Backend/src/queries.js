const {Client} = require('pg')
require('dotenv').config();

//let client = null;
//if(process.env.NODE_ENV === 'development') {
//	client = new Client ({
//		user: process.env.USER,
//		host: process.env.HOST,
//		database: process.env.DATABASE_URL,
//		password: process.env.PASSWORD,
//		port: process.env.PORT_DB
//	})
//} else {
//	client = new Client({
//	connectionString: process.env.DATABASE_URL
//	})
//}

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

//client.connect(err => {
//  if (err) {
//    console.error('connection error', err.stack)
//  } else {
//    console.log('connected!')
//  }
//})

const getPlayer = (req, res) => {
	// ORDER BY singles_rating ASC
	console.log('getting players');
  knex.raw('SELECT * FROM players')
		.then(results => {
    res.status(200).json(results.rows)
  }).catch(err => {console.log(err); throw err})
	
};

const getPlayerById = (req, res) => {
	const id = parseInt(req.params.id)
		console.log('getting players by Id');

	knex.raw('SELECT * FROM players WHERE player_id = ' + id)
		.then(results => {
			res.status(200).json(results.rows)
		}).catch(err => {console.log(err); throw err})
}

const createPlayer = (req, res) => {
	const {name, email} = req.body;
	
	
//	pool.query('INSERT INTO players (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//    if (error) {
//      throw error
//    }
//		console.log(JSON.stringify(results));
//    res.status(201).send(`Added ${results.rowCount} row`)
//  })
}

const getDaltons = (req, res) => {
		console.log('getting daltons');

	knex.raw('SELECT * FROM daltons')
    .then(results => {
			res.status(200).json(results.rows)
		}).catch(err => {console.log(err); throw err})
}

const getDaltonById = (req, res) => {
		console.log('getting daltons by id');

	const id = parseInt(req.params.id)
	knex.raw('SELECT * FROM daltons WHERE dalton_id = ' + id)
    .then(results => {
			res.status(200).json(results.rows)
		}).catch(err => {console.log(err); throw err})
}

function queryDaltonGenerator(dalton) {
	let string_variable_names = '';
	let string_dollar_signs = '';
	let counter = 1; // Needs to start at 1
	let variables = [];
	for (const el in dalton) {
		if(dalton[el] !== "" && dalton[el] !== '0') {
			string_variable_names = string_variable_names.concat(', ' +  el)
			string_dollar_signs = string_dollar_signs.concat(', $' + counter);
			variables.push(dalton[el]);
			counter++;
		}
	}
	
	string_variable_names = string_variable_names.slice(2, string_variable_names.length);
	string_dollar_signs = string_dollar_signs.slice(2, string_dollar_signs.length);
	let finalString = '(' + string_variable_names + ') VALUES (' + string_dollar_signs + ');'

	return {finalString, variables}
}

const addDalton = (req, res) => {
	const dalton = req.body;
	console.log(dalton);

	const {finalString, variables} = queryDaltonGenerator(dalton);
	
	const valid = (dalton && dalton.person_took_id && dalton.reason);
	console.log(finalString, variables);
	
	if(!valid) {
		res.status(500).send('not enough values' + JSON.stringify(dalton));
	} else if(valid && !dalton.date_earned) {
		client.query
			("INSERT INTO daltons " + finalString, variables, (error, results) => {
				if (error) {
					console.log(error);
					res.status(500).send('error; ' + JSON.stringify(error));
				} else {
					res.status(200).send(`Added ${results.rowCount} row`);
				}
		})
	}
}

const countDaltonsEarned = (req, res) => {
	const id = parseInt(req.params.id)

//	pool.query(
//		'SELECT * from players as pl LEFT JOIN ( SELECT person_earned_id, count(*) as "DaltonsEarned" from daltons group by person_earned_id )  as dal ON pl.id = dal.person_earned_id WHERE pl.id = $1;', [id], (error, results) => {
//    if (error) {
//      throw error
//    }
//		
//			console.log(results);
//    	res.status(200).json(results.rows)
//  })
	
		client.query(
		'SELECT person_earned_id, count(*) as "daltons_earned" from daltons WHERE person_earned_id=$1 group by person_earned_id;', [id], (error, results) => {
    if (error) {
      throw error
    }
		
			console.log(results);
    	res.status(200).json(results.rows)
  })
}

module.exports = {
	getPlayer,
	getPlayerById,
	getDaltons,
	createPlayer,
	countDaltonsEarned,
	addDalton,
	getDaltonById
};
