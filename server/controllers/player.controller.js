const db = require("../models/index");
// const config = require("../config/auth.config");
const Player = db.sequelize.model("Player");

exports.getPlayers = (req, res) => {
  console.log("got here")

  Player.findAll()
      .then(players => res.send(players))
      .catch(err => console.log('ERROR ---- : ' + err))
}

exports.getPlayerById = (req, res) => {
  const id = parseInt(req.params.id)

  Player.findOne({where: {id: id}})
      .then(player => res.send(player))
      .catch(err => console.log('ERROR ---- : ' + err))
}

exports.getPlayersIdandName = (req, res, next) => {
  console.log('getPlayers compressed!!');
  Player.findAll({
    attributes: ['player_id', 'nickname']
  })
      .then(players => res.status(200).json(players))
      .catch(next)
}

exports.updatePlayer = (req, res, next) => {
  const pl = req.body
  const id = req.params.id

  Player.update(pl, {where: {player_id: id}})
      .then(rows => res.json(rows))
      .catch(next)
}