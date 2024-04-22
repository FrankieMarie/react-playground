require("@dotenvx/dotenvx").config();
import { ExpressAuth } from "@auth/express";
import GitHub from "@auth/express/providers/github";
import express from "express";
import cors from "cors";
import path from "path";
import { Error } from "./types";

const app = express();

// Middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use("/auth/*", ExpressAuth({ providers: [GitHub] }));

app.listen(5000, () => console.log("Sevrer running on port 5000"));

app.use((err: Error, req: any, res: any, next: any) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
