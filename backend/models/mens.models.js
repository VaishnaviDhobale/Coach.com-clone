const mongoose = require("mongoose");

// Products Schema
const mensSchema = mongoose.Schema({
  category: String,
  title: String,
  price: Number,
  qut: Number,
  images: String,
});

// Products Model
const MensModel = mongoose.model("mens", mensSchema);

// export
module.exports = {
    MensModel,
};
