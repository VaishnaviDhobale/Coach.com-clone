const mongoose = require("mongoose");

// Products Schema
const productsSchema = mongoose.Schema({
  category: String,
  title: String,
  price: Number,
  qut: Number,
  images: String,
});

// Products Model
const ProductsModel = mongoose.model("product", productsSchema);

// export
module.exports = {
  ProductsModel,
};
