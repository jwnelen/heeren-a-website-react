var mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
	name: String,
	nickname: String,
	amountDaltons: Number,
	amountDaltonsReceived: Number,
	ratingSingles: Number,
	ratingDoubles: Number	
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
