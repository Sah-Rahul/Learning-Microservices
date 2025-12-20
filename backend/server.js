import express from "express";
import dotenv from "dotenv"; 
import clerkWebhook from "./src/controllers/clerkWebhook.js";
import { ConnectDB } from "./src/config/db.js";

dotenv.config();

const app = express();

ConnectDB();

app.post("/api/clerk", clerkWebhook);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hotel Booking Backend API ✅",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export default app;
