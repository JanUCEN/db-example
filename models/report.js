const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = {
  title: String,
  notes: String,
  location:String,
  date: {
      type:Date,
      default:Date.now
  }
}

const Report = new Schema(schema);

module.exports = mongoose.model('Report',Report)