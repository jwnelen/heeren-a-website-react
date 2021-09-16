let express = require('express');

let daltonRouter = express.Router();

const queries = require('../middleware/queries')

daltonRouter
    .get('/', queries.getDaltons)
    .post('/', queries.addDalton)
    .put('/:id', queries.updateDalton)
    .delete('/:id', queries.deleteDalton)

// daltonRouter
// 	.get('/daltonsTook/:id', queries.getDaltonsTookByPlayerId)

module.exports = daltonRouter;
