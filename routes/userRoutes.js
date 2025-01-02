import express from 'express'
const userRouter = express.Router();
import { signup, signin, allUsers,} from "../controllers/userController.js";
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/allUsers", allUsers);
export default userRouter;