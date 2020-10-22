var express = require('express');

var daltonRouter = express.Router();

const queries = require('../src/queries')

daltonRouter
	.get('/', queries.getDaltons)
	.post('/', queries.addDalton)
	.delete('/:id', queries.deleteDalton)

daltonRouter
	.get('/:id', queries.getDaltonById)
	.put('/:id', queries.updateDalton)

module.exports = daltonRouter;
