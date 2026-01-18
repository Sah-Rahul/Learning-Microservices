import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { ApiError } from "../config/ApiError.js";

export const registerUserService = async (
  name: string,
  email: string,
  password: string,
) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new ApiError(400, "User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};

export const loginUserService = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new ApiError(404, "User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ApiError(401, "Invalid credentials");

  return user;
};

export const getMyProfileService = async (userId: string) => {
  const user = await User.findById(userId).select("-password");

  if (!user) throw new ApiError(404, "User not found");

  return user;
};

export const updateProfileService = async (userId: string, name: string) => {
  if (!name) throw new ApiError(400, "Name is required");

  const user = await User.findByIdAndUpdate(
    userId,
    { name },
    { new: true, runValidators: true },
  ).select("-password");

  if (!user) throw new ApiError(404, "User not found");

  return user;
};
