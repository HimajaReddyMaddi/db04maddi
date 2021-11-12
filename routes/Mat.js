var express = require('express');
const mat_controllers= require('../controllers/Mat');
var router = express.Router();
/* GET costumes */
router.get('/', mat_controllers.Mat_view_all_Page );
router.get('/Mat/:id', mat_controllers.mat_detail);
module.exports = router;