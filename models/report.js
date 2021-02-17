const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Report = new Schema({
  title: String,
  notes: String,
  location:String,
  date: {
      type:Date,
      default:Date.now
  }
});

module.exports = mongoose.model('Report',Report)