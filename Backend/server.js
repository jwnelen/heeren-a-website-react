// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
let cors = require('cors');
// Initialize the app
let app = express();


// Import routes
let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

const uri =
  "mongodb+srv://jeroentjuuhh:Hoipop123@heeren-a-cluster.rncuy.gcp.mongodb.net/test?retryWrites=true&w=majority"

async function run() {
  try {
    await mongoose.connect(uri, {useNewUrlParser: true})
		var db = mongoose.connection;
	
		if(!db)
				console.log("Error connecting db")
		else
				console.log("Db connected successfully")
		
    const collection = db.collection('players');
		
		
		
  } finally {
    // Ensures that the client will close when you finish/error
//    await db.close();
  }
}

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

run().catch(console.dir);
