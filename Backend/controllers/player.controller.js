const db = require("../models");
const config = require("../config/auth.config");
const Player = db.players;

const Op = db.Sequelize.Op;

exports.getPlayers = (req, res) => {
	Player.findAll()
		.then(players => res.status(200).json(players))
		.catch(err => console.log('ERROR ---- : ' + err))
}

exports.getPlayerById = (req, res) => {
	const id = parseInt(req.params.id)
	
	Player.findAll({where: {player_id: id}})
		.then(player => res.status(200).json(player))
		.catch(err => console.log('ERROR ---- : ' + err))
}

exports.getPlayersIdandName = (req, res) => {
	console.log('getPlayers compressed!!');
	Player.findAll({
		attributes: ['player_id', 'nickname']
		})
		.then(players => res.status(200).json(players))
		.catch(err => console.log('ERROR ---- : ' + err))
}