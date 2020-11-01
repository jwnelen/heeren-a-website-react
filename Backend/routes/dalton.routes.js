//var express = require('express');
//
//var daltonRouter = express.Router();
//
//const queries = require('../middleware/queries')
//
//daltonRouter
//	.get('/', queries.getDaltons)
//	.post('/', queries.addDalton)
//
//daltonRouter
//	.get('/:id', queries.getDaltonById)
//	.put('/:id', queries.updateDalton)
//	.delete('/:id', queries.deleteDalton)
//
//daltonRouter
//	.get('/daltonsTook/:id', queries.getDaltonsTookByPlayerId)
//
//module.exports = daltonRouter;

const controller = require("../controllers/dalton.controller");

module.exports = function(app) {
	app.get('/api/daltons/', controller.getDaltons)
	app.post('/api/daltons/', controller.addDalton)
	
	app.get('/api/daltons/:id', controller.getDaltonById)
	app.put('/api/daltons/:id', controller.updateDalton)
	app.delete('/api/daltons/:id', controller.deleteDalton)
	
	app.get('/api/daltons/daltonsTook/:id', controller.getDaltonsTookByPlayerId)

}