const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    detail: String,
    price: Number,
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
