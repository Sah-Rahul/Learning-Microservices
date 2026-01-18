import { Request, Response } from "express";
import TryCatchError from "../config/TryCatchError.js";
import { ApiResponse } from "../config/ApiResponse.js";
import { generateToken } from "../services/token.service.js";
import {
  getMyProfileService,
  loginUserService,
  registerUserService,
  updateProfileService,
} from "../services/auth.service.js";

export const registerUser = TryCatchError(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const user = await registerUserService(name, email, password);

    res
      .status(201)
      .json(
        new ApiResponse(
          201,
          { id: user._id, name: user.name, email: user.email },
          "User created successfully",
        ),
      );
  },
);

export const loginUser = TryCatchError(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await loginUserService(email, password);
  const token = generateToken(user._id.toString());

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .json(new ApiResponse(200, { token }, `Welcome ${user.name}`));
});


 
export const logoutUser = TryCatchError(
  async (req: Request, res: Response) => {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0), 
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json(new ApiResponse(200, null, "Logged out successfully"));
  }
);


export const getMyProfile = TryCatchError(
  async (req: Request, res: Response) => {
    const userId = (req as any).user._id;

    const user = await getMyProfileService(userId);

    res
      .status(200)
      .json(new ApiResponse(200, user, "Profile fetched successfully"));
  },
);

export const updateProfile = TryCatchError(
  async (req: Request, res: Response) => {
    const userId = (req as any).user._id;

    const { name } = req.body;

    const updatedUser = await updateProfileService(userId, name);

    res
      .status(200)
      .json(new ApiResponse(200, updatedUser, "Profile updated successfully"));
  },
);
