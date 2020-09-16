Player = require('./playerModel');

exports.index = async function(req, res) {
	const players = await Player.find({});
	
	try {
		res.send(players);
	} catch (err) {
		res.status(500).send(err);
	}
};


exports.new = function(req, res) {
	var pl = new Player();
	pl.name = req.body.name;
	pl.nickname = req.body.nickname;
	pl.amountDaltonsEarned = req.body.amountDaltonsEarned;
	pl.amountDaltonsReceived = req.body.amountDaltonsReceived;
	pl.ratingSingles = req.body.ratingSingles;
	pl.ratingDoubles = req.body.ratingDoubles;
	
	pl.save(function (err) {
		if (err)
			res.json(err)
		else
			res.json({
				message: 'New Player created',
				data: pl
			})
	})
};

// Handle view info
exports.view = function(req, res) {
	Player.findById( req.params.player_id, function (err, player) {
		if (err)
				res.send(err);
		res.json({
				message: 'View single player',
				data: player
		});
	});
};

// Handle update contact info
exports.update = function (req, res) {
	Player.findById(req.params.player_id, function (err, pl) {
		if (err)
			res.send(err)
		
		pl.name = req.body.name;
		pl.nickname = req.body.nickname;
		pl.amountDaltonsEarned = req.body.amountDaltonsEarned;
		pl.amountDaltonsReceived = req.body.amountDaltonsReceived;
		pl.ratingSingles = req.body.ratingSingles;
		pl.ratingDoubles = req.body.ratingDoubles;
	
		pl.save(function (err) {
		if (err)
			res.json(err)
		else
			res.json({
				message: 'Player updated',
				data: pl
			});
		});
	});
};