let mongoose = require("mongoose")
let Schema = mongoose.Schema

let addressSchema = new Schema({
    village:String,
    city:{type:String,require:true},
    state:{type:String,require:true},
    pin:Number,
    user:Schema.Types.ObjectId
},{timestamps:true})

module.exports = mongoose.model("Address", addressSchema)