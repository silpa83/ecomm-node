import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET_KEY = "helloworld";

const signup = async (req, res) => {
  try {
    //console.log("Headers:",req.headers);
    console.log("Incoming Request Body:", req.body); // Log incoming data for debugging

    const { name, pass,email,role } = req.body;

    if (!name || !pass || !email || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(pass, 10);
    const newUser = await userModel.create({
      name,
      pass: hashedPassword,
      email,
      role,
    });

    const token = jwt.sign(
      { email: newUser.email, role: newUser.role, id: newUser._id },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    console.log("User Created Successfully:", newUser); // Log created user

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error("Error during signup:", error); // Log the error
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};


const signin = async (req, res) => {
  const {  pass ,email} = req.body;
  // console.log(email,pass)
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const matchPassword = await bcrypt.compare(pass, existingUser.pass);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        role: existingUser.role,
        id: existingUser._id,
      },
      SECRET_KEY
    );

    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const allUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
}
export { signup, signin, allUsers };