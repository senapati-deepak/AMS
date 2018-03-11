var express = require('express');
var router = express.Router();

var application = require('../controllers/application');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/submit', application.submit);

module.exports = router;
