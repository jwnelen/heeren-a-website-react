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
	countDaltonsEarned
};