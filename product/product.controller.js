import express from "express";
import Product from "./product.model.js";
import mongoose from "mongoose";

// routes are called controller
const router = express.Router();

// ? add product
router.post("/product/add", async (req, res) => {
  //  extract new product from req.body
  const newProduct = req.body;

  // add product
  await Product.create(newProduct);

  // send res
  return res.status(200).send({ message: "Product is added successfully." });
});

// ? get product detail by id
router.get("/product/detail/:id", async (req, res) => {
  // extract product id from req.params
  const productId = req.params.id;

  // check for  mongo id validity
  const isValidId = mongoose.isValidObjectId(productId);

  // if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid mongo id." });
  }

  // find product using product id
  const product = await Product.findOne({ _id: productId });

  // if not product, throw error
  if (!product) {
    return res.status(404).send({ message: "Product does not exist." });
  }

  // send product as response
  return res.status(200).send({ message: "success", productDetail: product });
});

export default router;
