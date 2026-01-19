import express from "express";
import cookieParser from "cookie-parser"; 
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./config/ErrorMiddleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "sab thik hai",
  });
});

app.use("/auth", authRoutes);


app.use(errorHandler)
export default app;
