import productModel from "../models/productsModel.js";

const addProduct = async (req, res) => {
  const { name, price, desc, url } = req.body;
  try {
    const createProduct = await productModel.create({
      name: name,
      desc: desc,
      price: price,
      url: url,
    });
    res.status(201).json(createProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.pid;
  const { name, desc, price, url } = req.body;
  try {
    const product = await productModel.findByIdAndUpdate(
      id,
      { name: name, desc:desc, price: price, url: url },
      { new: true }
    );
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const showProducts = async (_req, res) => {
  try {
    const items = await productModel.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const removeProduct = async (req, res) => {
  const id = req.params.pid;
  try {
    await productModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { addProduct, showProducts, updateProduct, removeProduct };