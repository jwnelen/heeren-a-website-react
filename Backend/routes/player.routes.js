const controller = require("../controllers/player.controller");

module.exports = function(app) {
	
	app.get('/api/players', controller.getPlayers)
	app.get('/api/players/compressed', controller.getPlayersIdandName)
	app.get('/api/players/:id', controller.getPlayerById)
		 .put('/api/players/:id', controller.updatePlayer)
	
}
