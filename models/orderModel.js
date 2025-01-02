import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  email: { type: String, required: true },
  items: { type: Object, required: true },
  total: { type: Number, required: true },
  status: { type: String },
  date: { type: Date, required: true },
});
export default mongoose.model("Order", orderSchema);