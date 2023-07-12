const mongoose = require("mongoose");

const Postschema = mongoose.Schema({title:{type:String,required:true},des:{type:String,required:true},date:{type:Date,default:Date.now}})


module.exports = mongoose.model("Posts",Postschema)