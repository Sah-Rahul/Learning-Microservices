import { Router } from "express";
import {
  getMyProfile,
  loginUser,
  logoutUser,
  registerUser,
  updateProfile,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const authRoutes = Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", authMiddleware, logoutUser);
authRoutes.get("/me", authMiddleware, getMyProfile);
authRoutes.put("/update/profile", authMiddleware, updateProfile);


export default authRoutes;
