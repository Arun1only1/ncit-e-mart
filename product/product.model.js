import mongoose from "mongoose";

// set rule/schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },

  quantity: {
    type: Number,
    min: 1,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  hasFreeShipping: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    trim: true,
    nullable: true,
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 1000,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    enum: [
      "electronics",
      "grocery",
      "bakery",
      "furniture",
      "kitchen",
      "clothing",
      "shoes",
      "glasses",
      "stationery",
      "liquor",
      "local",
    ],
  },
});

// create table/model
const Product = mongoose.model("Product", productSchema);
export default Product;
