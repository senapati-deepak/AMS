var mongoose = require("mongoose");
var Schema = mongoose.Schema ;

var deptSchema = new Schema({
    name : { "type" : String , required : false },
    deptId : { "type" : String , required : false },
    email: { "type" : String, required : false },
    applications: { type: Schema.Types.ObjectId, ref: 'application' }
}); 

var deptModel = mongoose.model('department', deptSchema );

module.exports = deptModel;