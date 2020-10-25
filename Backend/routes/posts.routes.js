var express = require('express');

var postsRouter = express.Router();

const queries = require('../middleware/queries')

postsRouter.get('/', queries.getPosts)

module.exports = postsRouter;
