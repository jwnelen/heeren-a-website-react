var express = require('express');

var playerRouter = express.Router();

const queries = require('../src/queries')

playerRouter.get('/', queries.getPlayer)
playerRouter.get('/compressed', queries.getPlayersIdandName)
playerRouter.get('/:id', queries.getPlayerById)

module.exports = playerRouter;
