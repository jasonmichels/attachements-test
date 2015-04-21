var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET thank you page */
router.get('/thanks', function(req, res, next) {
  res.render('thanks');
});

module.exports = router;
