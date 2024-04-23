require("@dotenvx/dotenvx").config();
import { Error } from "./types";
import { ExpressAuth } from "@auth/express";
import GitHub from "@auth/express/providers/github";
// import credentials from "@auth/express/providers/credentials";
import express from "express";
import cors from "cors";
import path from "path";

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(
  "/auth/github",
  ExpressAuth({
    providers: [
      GitHub,
      // credentials({
      //   credentials: {
      //     email: {},
      //     password: {},
      //   },
      //   authorize: async (credentials) => {
      //     let user = null;

      //     const pwHash = saltAndHashPassword(credentials.password);

      //     user = await getUserFromDb(credentials.email, pwHash);

      //     if (!user) {
      //       throw new Error("User not found.");
      //     }

      //     return user;
      //   },
      // }),
    ],
  })
);

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
