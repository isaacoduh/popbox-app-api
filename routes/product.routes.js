const express = require("express");
const router = express.Router();
const productModel = require("../models/product.model");

router.get("/get-all-products", async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).send(products);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
