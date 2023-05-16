const mongoose = require("mongoose");

// Products Schema
const womensSchema = mongoose.Schema({
  category: String,
  title: String,
  price: Number,
  qut: Number,
  images: String,
});

// Products Model
const WomensModel = mongoose.model("womens", womensSchema);

// export
module.exports = {
    WomensModel,
};
