import { Request, Response, NextFunction } from "express"; 
import { ApiError } from "./ApiError";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json(err);
  }

  console.error(err);
  res.status(500).json({
    statusCode: 500,
    message: "Internal Server Error",
    success: false,
    data: null,
    errors: [err.message || err],
  });
};
