let mongoose = require("mongoose")
let Schema = mongoose.Schema


let auserSchema = new Schema({
       favrites: [String],
       marks:[Number]
})

