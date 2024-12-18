let mongoosh = require("mongoose")
let Schema = mongoosh.Schema

let atricleSchema = new Schema({
    name:String,
    age : Number
})