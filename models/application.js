var mongoose = require("mongoose");
var Schema = mongoose.Schema ;

var appSchema = new Schema({
    applicationId : { "type" : String , required : false } ,
    type : { "type" : String , required : false } ,
    dueDate : { "type" : String , required : false },
    content :  {"type" : String , required : false },
    status : { "type" : String , enum : [ "accepted", "rejected", "pending" ] },
    statusMsg : { "type" : String, required : false },
    timeline : [{ "type" : String, required : false }]
});

var appModel = mongoose.model('application', appSchema );

module.exports = appModel;