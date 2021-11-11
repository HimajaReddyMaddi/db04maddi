var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var mat_controller = require('../controllers/Mat');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Mat ROUTES ///
// POST request for creating a gas.
router.post('/resource/Mat', mat_controller.mat_create_post);
// DELETE request to delete gas.
router.delete('/resource/Mat/:id', mat_controller.mat_delete);
// PUT request to update gas.
router.put('/resource/Mat/:id', mat_controller.mat_update_put);
// GET request for one gas.
router.get('/resource/Mat/:id', mat_controller.mat_detail);
// GET request for list of all gas items.
router.get('/resource/Mat', mat_controller.mat_list);
module.exports = router;