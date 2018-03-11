var express = require('express');
var router = express.Router();

var application = require('../controllers/application');
var pending = require('../controllers/pending');
var faculty = require("../controllers/faculty");
//var studentLogin = require("../controllers/studentlogin");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'Express' });
});

router.get("/student", function(req, res, next) {
    res.render('pages/student', { title: 'Student Dashboard' });
});

router.get("/pending", pending.displayPending);

router.get("/approved", pending.displayApproved);

router.get("/faculty", faculty.displayPending );
router.get("/application", application.display);

router.get("/faculty_history", faculty.displayApproved);

router.get("/application", application.display);
router.get("/applicationF", application.displayF);

module.exports = router;