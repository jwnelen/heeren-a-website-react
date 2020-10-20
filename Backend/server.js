// https://medium.com/@aem_iro/deploying-a-node-js-postgressql-app-to-heroku-hosting-platform-cc611287ae76
// https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66
// https://www.red-gate.com/simple-talk/blogs/setting-up-a-simple-rest-interface-with-sql-serve

// git subtree push heroku --prefix=Backend main

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./src/queries')
const path = require('path');
const app = express()
const cors = require('cors')

app.use(cors())

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// add middlewares for production
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("build"));

// adding controllers
app.use('/api/players', require('./router-controllers/player-controller'))
app.use('/api/daltons', require('./router-controllers/dalton-controller'))

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, "build", "index.html"));
})
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})