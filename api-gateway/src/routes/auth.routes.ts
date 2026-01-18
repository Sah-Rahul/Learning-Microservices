import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const authRoutes = express.Router();

authRoutes.use(
  "/",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICES as string,
    changeOrigin: true,
  }),
);

export default authRoutes;
