// import express from "express";
// import userRouter from "./routes/userRoutes.js";
// import orderRouter from "./routes/orderRoutes.js";
// import mongoose from "mongoose";
// import cors from "cors";

// import productRouter from "./routes/productRoutes.js";

// const app = express();
// //const __dirname = import.meta.dirname;
// app.use(express.json());
// app.use(cors());
//  //app.use(express.static(__dirname + '/client/build'));
// app.use("/users", userRouter);
// app.use("/products", productRouter)
// app.use("/orders", orderRouter)
// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/ecomm")
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(8080, () => {
//       console.log("Server Started on port 8080");
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error.message);
//   });
import express from "express";
import userRouter from "./routes/userRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/products", productRouter)

mongoose
  .connect("mongodb://127.0.0.1:27017/ecomm")
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });