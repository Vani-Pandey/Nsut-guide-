const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  type: String,
  title: String,
  place: String,
  desc: String,
  image: String,
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Item", ItemSchema);
