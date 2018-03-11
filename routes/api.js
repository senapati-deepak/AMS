var express = require('express');
var router = express.Router();

var application = require('../controllers/application');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/submit', application.submit);
router.post('/accept', application.accept);
router.post('/reject', application.reject);
router.post('/forward', application.forward);
router.get('/apphistory/:id/:type?', application.forward);

module.exports = router;