import express from "express";
import connectDB from "./connect.db.js";
import productRoutes from "./product/product.controller.js";
import userRoutes from "./user/user.controller.js";
import cors from "cors";

const app = express();

// to make app understand json
app.use(express.json());

// connect database
connectDB();

// ? CORS=> Cross Origin Resource Sharing
app.use(cors());

// register routes
app.use(productRoutes);
app.use("/v2", userRoutes);

app.use((error, req, res, next) => {
  return res.status(500).send({ message: "Something went wrong." });

  next();
});
// network port and server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
