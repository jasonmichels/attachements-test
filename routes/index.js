var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body.myname);
  console.log(req.files);
  res.redirect(303, '/');
});

/* GET thank you page */
router.get('/thanks', function(req, res, next) {
  res.render('thanks');
});

module.exports = router;
