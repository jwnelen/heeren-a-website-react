var express = require('express');

var postsRouter = express.Router();

const queries = require('../src/queries')

postsRouter.get('/', queries.getPosts)

module.exports = postsRouter;
