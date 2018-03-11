var mongoose = require('mongoose');
var facultyModel = require('../models/faculty');

var displayPending = function (req, res) {
    facultyModel.findOne({ "facultyId": "105" }).populate({ path: "applications" }).exec(function (err, doc) {
        console.log(doc)
        if (!doc) {
            res.send("Not found");
        } else {
            console.log(doc);
            res.render("pages/faculty", { "doc": doc });
        }
    });
};

var displayApproved = function (req, res) {
    facultyModel.findOne({ "facultyId": "105" }).populate({ path: "applications" }).exec(function (err, doc) {
        if (!doc) {
            res.send("Not found");
        } else {
            console.log(doc);
            res.render("pages/faculty_history", { "doc": doc });
        }
    });
};

module.exports = {
    "displayPending": displayPending,
    "displayApproved": displayApproved
};