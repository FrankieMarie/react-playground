import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
require("@dotenvx/dotenvx").config();

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

app.listen(5000, () => console.log("Sevrer running on port 5000"));

app.use((err: any, req: any, res: any, next: any) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
