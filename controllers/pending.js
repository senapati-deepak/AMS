var mongoose = require('mongoose');
var studModel = require('../models/student');

var displayPending = function (req, res) {
    studModel.findOne({ "studentId": "100" }).populate({ path: "applications" }).exec(function (err, doc) {
        if (!doc) {
            res.send("Not found");
        } else {
            console.log(doc);
            res.render("pages/pending", { "doc": doc });
        }
    });
};

var displayApproved = function (req, res) {
    studModel.findOne({ "studentId": "100" }).populate({ path: "applications" }).exec(function (err, doc) {
        if (!doc) {
            res.send("Not found");
        } else {
            console.log(doc);
            res.render("pages/approved", { "doc": doc });
        }
    });
};

module.exports = { "displayPending": displayPending , 
                   "displayApproved" : displayApproved };