import express from "express";
import auth from "../middlewares/auth.js";
const app = express();
import {
  addProduct,
  removeProduct,
  showProducts,
  updateProduct,
} from "../controllers/productsController.js";

// Create a Router instance
const productRouter = express.Router();

// Define Routes
productRouter.get("/all", auth,showProducts); // Get all products
productRouter.post("/add",auth, addProduct); // Add a product
productRouter.patch("/update/:pid",auth, updateProduct); // Update a product by ID
productRouter.delete("/delete/:pid", auth,removeProduct); // Delete a product by ID

export default productRouter;
