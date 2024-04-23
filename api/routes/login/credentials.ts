import express from "express";
import { Argon2id } from "oslo/password";
import { lucia } from "../../lib/auth.js";
import { DatabaseUser, db } from "../../lib/db.js";

export const loginRouter = express.Router();

loginRouter.get("/login", async (_, res) => {
  if (res.locals.session) {
    return res.redirect("/");
  }

  return res.setHeader("Content-Type", "text/html").status(200).send("Success");
});

loginRouter.post("/login", async (req, res) => {
  const username: string | null = req.body.username ?? null;

  if (
    !username ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return res
      .setHeader("Content-Type", "text/html")
      .status(400)
      .send("Invalid credentials.");
  }

  const password: string | null = req.body.password ?? null;

  if (!password || password.length < 6 || password.length > 255) {
    return res
      .setHeader("Content-Type", "text/html")
      .status(400)
      .send("Invalid credentials.");
  }

  const existingUser = db
    .prepare("SELECT * FROM user WHERE username = ?")
    .get(username) as DatabaseUser | undefined;

  if (!existingUser) {
    return res
      .setHeader("Content-Type", "text/html")
      .status(400)
      .send("User does not exist.");
  }

  const validPassword = await new Argon2id().verify(
    existingUser.password!,
    password
  );

  if (!validPassword) {
    return res
      .setHeader("Content-Type", "text/html")
      .status(400)
      .send("Invalid credentials.");
  }

  const session = await lucia.createSession(existingUser.id, {});
  res.appendHeader(
    "Set-Cookie",
    lucia.createSessionCookie(session.id).serialize()
  );
});
