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

var accept = function(req, res) {
    console.log(req.body);
    var id = req.body.id;
    var msg = req.body.msg;
    appModel.findOneAndUpdate({ applicationId : id }, { $set : { status : "accepted", statusMsg : msg } }, function(err, doc) {
        if(err) throw err;
        res.json({ "msg" : "Accepted", doc : doc });
    });
};

var reject = function(req, res) {
    console.log(req.body);
    var id = req.body.id;
    appModel.findOneAndUpdate({ applicationId : id }, { $set : { status : "rejected", statusMsg : msg } }, function(err, doc) {
        if(err) throw err;
        res.json({ "msg" : "Rejected", doc : doc });
    });
};

var forward = function(req, res) {
    console.log(req.body);
    var id = req.body.id;
    var to = req.body.to;
    var msg = req.body.msg;
    appModel.findOneAndUpdate({ applicationId : id }, { $push : { timeline : to }, $set : { statusMsg : msg } }, function(err, doc) {
        if(err) throw err;
        res.json({ "msg" : "Forwarded", doc : doc });
    });
};

module.exports = {
    "submit" : submit 
};