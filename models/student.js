var mongoose = require("mongoose");
var Schema = mongoose.Schema ;

var studSchema = new Schema({
    name : { "type" : String , required : false },
    studentId : { "type" : String , required : false },
    email: { "type" : String, required : false },
    gender : { "type" : String , required : false, enum: [ "male", "female", "other" ] } ,
    batch :  {"type" : String , required : false },
    applications: [{ type: Schema.Types.ObjectId, ref: 'application' }]
}); 

var studModel = mongoose.model('student', studSchema );

module.exports = studModel;