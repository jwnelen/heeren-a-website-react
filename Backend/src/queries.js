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
  pool.query('SELECT * FROM players', (error, results) => {
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
	
	
	pool.query('INSERT INTO players (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
		console.log(JSON.stringify(results));
    res.status(201).send(`Added ${results.rowCount} row`)
  })
}

module.exports = {
	getPlayer,
	getPlayerById,
	createPlayer
};