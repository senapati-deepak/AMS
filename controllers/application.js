var mongoose = require('mongoose');
var appModel = require('../models/application');

var submit = function (req, res) {
    console.log(req.body);
    var newApp = new appModel(req.body);
    newApp.save(function(err, doc) {
        if(err) throw err;
        res.json({ "msg" : "Doc Saved", "doc" : doc });
    });
};

var acceptAndForward = function(req, res) {
    console.log(req.body);
    
};

module.exports = {
    "submit" : submit 
};