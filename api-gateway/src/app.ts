import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:3000/auth",
    changeOrigin: true,
    logger: console,
  }),
);

export default app;
