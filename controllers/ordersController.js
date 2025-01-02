import orderModel from "../models/orderModel.js";

const addOrder = async (req, res) => {
  const { email, details, total, status } = req.body;
  try {
    const createOrder = await orderModel.create({
      email: email,
      items: details,
      total: total,
      status: status,
      date: Date(),
    });
    res.status(201).json(createOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};


const showOrders = async (req, res) => {
  try {
    const items = await orderModel.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { addOrder, showOrders };