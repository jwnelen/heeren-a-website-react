// https://medium.com/@aem_iro/deploying-a-node-js-postgressql-app-to-heroku-hosting-platform-cc611287ae76
// https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66
// https://www.red-gate.com/simple-talk/blogs/setting-up-a-simple-rest-interface-with-sql-server/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./src/queries')

const cors = require('cors')
app.use(cors())

const port = 8000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})