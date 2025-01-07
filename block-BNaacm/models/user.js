let mongoose = require("mongoose")
let Schema = mongoose.Schema



let userSchema = new Schema ({
    name:[String],
    age:[Number],
    possword:{type: String, require: true, minlength: 5, maxlength: 15},
    createdAt:{type:Date, default: new Date()}
})

module.exports = mongoose.model("User", userSchema)