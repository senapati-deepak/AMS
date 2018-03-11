var mongoose = require('mongoose');
var appModel = require('../models/application');
var studModel = require('../models/student');
var facultyModel = require('../models/faculty');

var submit = function(req, res) {
    console.log(req.body);
    var studId = req.body.studId;
    var applicationId = req.body.applicationId;
    var newApp = new appModel({applicationId : applicationId, content : req.body.content});
    var to = req.body.to;
    newApp.save(function(err, doc) {
        if(err) throw err;
        studModel.findOneAndUpdate({ studentId : studId }, { $push : { applications : doc._id } }, function(err) {
            facultyModel.findOneAndUpdate({ facultyId : to }, { $push : { applications : doc._id } }, function(err, doc) {
                if(err) throw err; 
                res.json(doc);
            });
        });
    });
};

var accept = function(req, res) {
    console.log(req.body);
    var id = req.body.id;
    var msg = req.body.msg;
    appModel.findOneAndUpdate({ applicationId: id }, { $set: { status: "accepted", statusMsg: msg } }, function(err, doc) {
        if (err) throw err;
        res.json({ "msg": "Accepted", doc: doc });
    });
};

var reject = function(req, res) {
    console.log(req.body);
    var id = req.body.id;
    var msg = req.body.msg;
    appModel.findOneAndUpdate({ applicationId: id }, { $set: { status: "rejected", statusMsg: msg } }, function(err, doc) {
        if (err) throw err;
        res.json({ "msg": "Rejected", doc: doc });
    });
};

var forward = function(req, res) {
    console.log(req.body);
    var id = req.body.id;
    var to = req.body.to;
    var msg = req.body.msg;
    appModel.findOneAndUpdate({ applicationId: id }, { $push: { timeline: to }, $set: { statusMsg: msg } }, function(err, doc) {
        if (err) throw err;
        res.json({ "msg": "Forwarded", doc: doc });
    });
};

var display = function(req, res) {
    console.log(req.query.id);
    appModel.findOne({ applicationId: req.query.id }, function(err, doc) {
        if (doc) {
            res.render('pages/application', { "doc": doc })
        }
    });

}

var displayF = function(req, res) {
    console.log(req.query.id);
    appModel.findOne({ applicationId: req.query.id }, function(err, doc) {
        if (doc) {
            res.render('pages/applicationF', { "doc": doc })
        }
    });

}

var appHistory = function(req, res) {
    console.log(req.body);
    var id = req.params.id;
    var type = req.params.type;
    if (type) {
        facultyModel.find({ facultyId: id })
            .populate({ path: 'applications' })
            .exec(function(err, docs) {
                if (err) throw err;
                res.json(docs);
            });
    } else {
        studModel.find({ studentId: id })
            .populate({ path: 'applications' })
            .exec(function(err, docs) {
                if (err) throw err;
                res.json(docs);
            });
    }
};

module.exports = {
    "submit": submit,
    "display": display,
    "forward": forward,
    "reject": reject,
    "accept": accept,
    "displayF": displayF
};