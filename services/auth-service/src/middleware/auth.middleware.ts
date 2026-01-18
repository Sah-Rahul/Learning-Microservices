import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"; 
import User from "../models/user.model.js";
import { ApiError } from "../config/ApiError.js";

interface JwtPayload {
  userId: string;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  if (!token) return next(new ApiError(401, "Unauthorized"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return next(new ApiError(401, "User not found"));

    (req as any).user = user; 
    next();
  } catch (err) {
    next(new ApiError(401, "Invalid token"));
  }
};
