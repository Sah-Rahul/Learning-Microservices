import { Router } from "express";
import {
  getMyProfile,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const userRoutes = Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/logout", authMiddleware, logoutUser);
userRoutes.get("/me", authMiddleware, getMyProfile);

export default userRoutes;
