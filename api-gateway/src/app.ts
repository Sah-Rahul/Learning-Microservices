import express, { Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.use(cookieParser());

app.use(
  "/auth",
  createProxyMiddleware<Request, Response>({
    target: process.env.AUTH_SERVICES as string,
    changeOrigin: true,
    logger: console,
  }),
);

export default app;
