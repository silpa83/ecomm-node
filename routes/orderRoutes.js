import express from "express";
import auth from "../middlewares/auth.js";
const app = express();
import {
  addOrder,
  showOrders,
} from "../controllers/ordersController.js";
const orderRouter = express.Router();


orderRouter.get("/all", showOrders);
orderRouter.post("/add",  addOrder);
export default orderRouter;