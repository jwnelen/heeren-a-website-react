var express = require('express');

var daltonRouter = express.Router();

const queries = require('../src/queries')

daltonRouter
	.get('/', queries.getDaltons)
	.post('/', queries.addDalton)

daltonRouter.get('/:id', queries.getDaltonById)

module.exports = daltonRouter;
