const db = require("../models");
const config = require("../config/auth.config");
const Post = db.post;

const Op = db.Sequelize.Op;

exports.getPosts = (req, res) => {
	Post.findAll({
		order: [['date', 'DESC']]
	})
		.then(posts => res.status(200).json(posts))
		.catch(err => console.log('ERROR ---- : ' + err))
}