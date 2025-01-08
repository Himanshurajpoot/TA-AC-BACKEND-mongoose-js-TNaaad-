let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  password: { type: String, minlength: 5 },
  favourites:[String],

},{timestamps:true});

module.exports = mongoose.model("User", userSchema)
  