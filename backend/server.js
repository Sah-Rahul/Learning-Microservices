import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./src/config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./src/controllers/clerkWebhook.js";

dotenv.config();
const app = express();

app.use(cors());

app.post(
  "/api/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhooks
);

app.use(express.json());

app.use(clerkMiddleware());

ConnectDB();

app.get("/", (req, res) => {
  res.send("server is running ✅");
});

export default app;
