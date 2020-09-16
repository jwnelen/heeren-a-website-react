// api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var playerController = require('./Controller');

router.route('/players')
    .get(playerController.index)
    .post(playerController.new);

router.route('/players/:player_id')
    .get(playerController.view)
		.patch(playerController.update)
    .put(playerController.update);

// Export API routes
module.exports = router;