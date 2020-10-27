//var express = require('express');
//
//var playerRouter = express.Router();
//
//const queries = require('../middleware/queries')
//
//playerRouter.get('/', queries.getPlayer)
//playerRouter.get('/compressed', queries.getPlayersIdandName)
//playerRouter.get('/:id', queries.getPlayerById)
//
//module.exports = playerRouter;

const controller = require("../controllers/player.controller");

module.exports = function(app) {
	
	app.get('/api/players', controller.getPlayers)
	app.get('/api/players/compressed', controller.getPlayersIdandName)
	app.get('/api/players/:id', controller.getPlayerById)
	
}
