let mongoose = require("mongoose")

let Schema = mongoose.Schema


let userSchema = new Schema({
    favrites: [String],
       marks:[Number],
       password: {type: String,require: true, minlength: 5,maxlength: 15},
       createdAt: {type: Date, default: new Date()}
})

console.log(userSchema)