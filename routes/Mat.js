var express = require('express');
const mat_controllers= require('../controllers/Mat');
var router = express.Router();
/* GET costumes */
router.get('/', mat_controllers.Mat_view_all_Page );
router.get('/Mat/:id', mat_controllers.mat_detail);
/* GET detail costume page */
router.get('/detail', mat_controllers.mat_view_one_Page);
/* GET create costume page */
router.get('/create', mat_controllers.mat_create_Page);
/* GET create update page */
router.get('/update', mat_controllers.mat_update_Page);
/* GET create costume page */
router.get('/delete', mat_controllers.mat_delete_Page);
/* GET update costume page */
router.get('/update', mat_controllers.mat_update_Page);
module.exports = router;