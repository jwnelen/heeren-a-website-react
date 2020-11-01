const db = require("../models");
const config = require("../config/auth.config");
const Dalton = db.dalton;

const Op = db.Sequelize.Op;

exports.getDaltons = (req, res) => {
	Dalton.findAll()
		.then(daltons => res.status(200).json(daltons))
		.catch(err => console.log('ERROR ---- : ' + err))
}

exports.getDaltonById = (req, res) => {
	const id = parseInt(req.params.id)

	Dalton.findAll({where: {dalton_id: id}})
		.then(dalton => res.status(200).json(dalton))
		.catch(err => console.log('ERROR ---- : ' + err))
}

exports.addDalton = (req, res) => {
	console.log('adding dalton: ' + JSON.stringify(req.body))
	
	 Dalton.create(req.body)
		.then(dalton => res.status(200).send({message: dalton.dalton_id}))
		.catch(err => console.log('ERROR ---- : ' + err))
}
exports.deleteDalton = (req, res) => {
	const id = parseInt(req.params.id)
	
	Dalton.destroy({
		where: {
			dalton_id: id
		}
	})
		.then(res.send({message: 'deleted dalton: ' + id}))
		.catch(err => {console.log('err:: ' + err); throw err})

}

exports.updateDalton = (req, res) => {
	const dl = req.body
	const id = req.params.id
	
	Dalton.update(dl, {where: {dalton_id: id}})
		.then(rows => res.json(rows))
		.catch(Error("Some field are wrong"))

}

exports.getDaltonsTookByPlayerId = (req, res) => {
	const id = parseInt(req.params.id)

	Dalton.count({
		where: {
			person_took_id: id
		}
	})
	.then(result => res.status(200).json({count: result}))
	.catch(err => {console.log(err); throw err})
}

