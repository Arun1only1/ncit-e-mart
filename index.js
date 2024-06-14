import express from "express";
import connectDB from "./connect.db.js";
import productRoutes from "./product/product.controller.js";

const app = express();

// to make app understand json
app.use(express.json());

// connect database
connectDB();

// register routes
app.use(productRoutes);

// network port and server
const PORT = 6000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
