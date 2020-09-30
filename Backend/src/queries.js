const Pool = require('pg').Pool
require('dotenv').config();

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT
});

const getPlayer = (request, response) => {
  pool.query('SELECT * FROM players ORDER BY single_rating ASC', (error, results) => {
    if (error) {
			
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getPlayerById = (req, res) => {
	const id = parseInt(req.params.id)
	
	pool.query('SELECT * FROM players WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
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
	pool.query('SELECT * FROM daltons', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const addDalton = (req, res) => {
	console.log('got at the add dalton of the queries')
	const dalton = req.body;
	const date_earned = dalton.date_earned;
	const reason = dalton.reason;
	const person_name = dalton.person_earned_id;
	console.log(dalton);
	
	if(!dalton || !date_earned || !reason || !person_name) {
		res.status(500).send('not enough values' + JSON.stringify(dalton));
	} else { 			//INSERT INTO daltons (date_earned, reason, person_earned_id) VALUES ('2020-09-30', 'team dalton', 5);
			pool.query("INSERT INTO daltons (date_earned, reason, person_earned_id) VALUES ($1, $2, $3);", [date_earned, reason, person_name], (error, results) => {
			if (error) {
				console.log(error);
				res.status(500).send('error; ' + JSON.stringify(error));
			} else {
				console.log('results: ' + JSON.stringify(results));
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
	
		pool.query(
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
	addDalton
};