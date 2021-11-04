var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mat', { title: 'Search Results for mat' });
});

module.exports = router;