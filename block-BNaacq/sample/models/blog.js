let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    tage: { type: [String], default: [] },
    likes: { type: Number, default: 0 },
    author: { type: Schema.Types.ObjectId },
    comments: [{ type: Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

let commentsSchema = new Schema(
  {
    content: { type: String, require: true },
    author: { type: Schema.Types.ObjectId },
    article: { type: Schema.Types.ObjectId },
  },
  { timestamps: true }
);

let userSchema = new Schema({
  name: { type: String, require: true },
  email: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  age: { type: Number, default: 10, require: true },
});

module.exports = mongoose.model('Article', articleSchema);
module.exports = mongoose.model('Comment', commentsSchema);
module.exports = mongoose.model('User', userSchema);
