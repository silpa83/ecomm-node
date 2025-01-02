import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  url: { type: String },
});
export default mongoose.model("Product", productSchema);