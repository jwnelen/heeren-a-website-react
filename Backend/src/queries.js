const Pool = require('pg').Pool
require('dotenv').config();

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
			
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
	getUsers
};