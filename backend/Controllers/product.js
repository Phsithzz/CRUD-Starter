//
const Product = require("../Models/Product");
//

exports.create = async (req, res) => {
  try {
    const products = await Product(req.body).save();
    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.list = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.findOne({ _id: id }).exec();

    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();

    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.findOneAndDelete({ _id: id }).exec();

    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
