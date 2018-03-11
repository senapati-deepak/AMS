var mongoose = require("mongoose");
var Schema = mongoose.Schema ;

var appSchema = new Schema({
    applicationId : { "type" : String , required : false } ,
    type : { "type" : String , required : false, default : "Bonafied Certificate" } ,
    dueDate : { "type" : String , required : false, default : "18/03/18" },
    content :  {"type" : String , required : false },
    status : { "type" : String , enum : [ "accepted", "rejected", "pending" ], default : "pending" },
    statusMsg : { "type" : String, required : false, default : "To Be Verified" },
    timeline : { "type" : String, required : false, default : "Advisor" }
});

var appModel = mongoose.model('application', appSchema );

module.exports = appModel;