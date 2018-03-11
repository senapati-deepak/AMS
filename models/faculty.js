var mongoose = require("mongoose");
var Schema = mongoose.Schema ;

var facultySchema = new Schema({
    name : { "type" : String , required : false },
    facultyId : { "type" : String , required : false },
    email: { "type" : String, required : false },
    gender : { "type" : String , required : false, enum: [ "male", "female", "other" ] } ,
    dept :  {"type" : String , required : false },
    applications: [{ type: Schema.Types.ObjectId, ref: 'application' }],
    type : { "type" : String , required : false, enum : [ "advisor", "hod", "principal" ] } 
}); 

var facultyModel = mongoose.model('faculty', facultySchema );

module.exports = facultyModel;