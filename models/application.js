var mongoose = require("mongoose");
var Schema = mongoose.Schema ;

var applicationSchema = new Schema({
    applicantName : { "type" : String , required : false },
    applicationId : { "type" : String , required : false } ,
    type : { "type" : String , required : false } ,
    dueDate : { "type" : String , required : false },
    content :  {"type" : String , required : false }
    
}); 