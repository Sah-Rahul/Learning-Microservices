import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ConnectDB from "./src/config/db.js";
import clerkWebhook from "./src/controllers/clerkWebhook.js";

dotenv.config();

const app = express();

ConnectDB().catch((err) => {
  console.error("MongoDB connection failed:", err);
});

app.post("/api/clerk", clerkWebhook);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hotel Booking Backend API ✅",
    timestamp: new Date().toISOString(),
    env: {
      mongoConfigured: !!process.env.MONGO_URI,
      clerkConfigured: !!process.env.CLERK_WEBHOOK_SECRET,
    },
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    mongodb:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export default app;
