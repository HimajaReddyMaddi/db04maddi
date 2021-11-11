var express = require('express');
const gas_controllers= require('../controllers/Mat');
var router = express.Router();
/* GET costumes */
router.get('/', gas_controllers.Mat_view_all_Page );
module.exports = router;