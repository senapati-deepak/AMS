var express = require('express');
var router = express.Router();
//var studentLogin = require("../controllers/studentlogin");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'Express' });
});

router.get("/student", function(req, res, next) {
    res.render('pages/student', { title: 'Student Dashboard' });
});;

module.exports = router;