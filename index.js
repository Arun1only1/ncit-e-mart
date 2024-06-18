import express from "express";
import connectDB from "./connect.db.js";
import productRoutes from "./product/product.controller.js";
import userRoutes from "./user/user.controller.js";

const app = express();

// to make app understand json
app.use(express.json());

// connect database
connectDB();

// TODO:CORS
// TODO: api version

// register routes
app.use(productRoutes);
app.use(userRoutes);

// TODO: global error handler
// network port and server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
