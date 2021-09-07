// https://medium.com/@aem_iro/deploying-a-node-js-postgressql-app-to-heroku-hosting-platform-cc611287ae76
// https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66
// https://www.red-gate.com/simple-talk/blogs/setting-up-a-simple-rest-interface-with-sql-serve

// git subtree push heroku --prefix=client main
// PGUSER=postgres PGPASSWORD=<> heroku pg:push heeren-a-api DATABASE_URL 

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./middleware/queries')
const path = require('path');
const app = express()
const cors = require('cors')

const db_Seq = require('./models/index.js')

const connectSeq = async function() {
	try {
		await db_Seq.sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

connectSeq();

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

// Authentication routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/player.routes')(app);

// adding routes
app.use('/api/players', require('./routes/player.routes'))
app.use('/api/daltons', require('./routes/dalton.routes'))
app.use('/api/posts', require('./routes/posts.routes'))

db_Seq.sequelize.sync({force:false}).then(() => {
    db_Seq.user.findAll({where: {user_player_id: 1}})
		.then(player => console.log(JSON.stringify(player)))
		.catch(err => console.log("error! - " + err ))
	})

app.use(express.static(path.resolve(__dirname, "../client/build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// in production environment devdependecies (the ones in the package.json) are not installed

app.get("*", function (request, response) {
	response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})