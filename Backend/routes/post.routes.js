const controller = require("../controllers/post.controller");

module.exports = function(app) {
	app.get('/api/posts', controller.getPosts)
}

