var express = require('express');
var router = express.Router();

var application = require('../controllers/application');
//var studentLogin = require("../controllers/studentlogin");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'Express' });
});

router.get("/student", function(req, res, next) {
    res.render('pages/student', { title: 'Student Dashboard' });
});

router.get("/pending", function(req, res, next) {
    res.render('pages/pending', { title: 'Student Dashboard' });
});

router.get("/approved", function(req, res, next) {
    res.render('pages/approved', { title: 'Student Dashboard' });
});

router.get("/application", function(req, res, next) {
    res.render('pages/application');
});

module.exports = router;