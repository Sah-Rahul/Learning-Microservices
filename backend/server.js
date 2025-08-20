import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./src/config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./src/controllers/clerkWebhook.js";


dotenv.config();
const app = express();
app.use(cors());

app.use('/api/clerk', clerkWebhooks);
app.use(clerkMiddleware());

app.use('/', (req , res ) => res.send("API is working "))
app.get("/", (req, res) => {
  res.send("server is running...");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  ConnectDB();
  console.log(`server is running on ${PORT}`);
});
