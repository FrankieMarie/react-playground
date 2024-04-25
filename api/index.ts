import express from "express";
import type { User, Session } from "lucia";
import { verifyRequestOrigin } from "lucia";
import { lucia } from "./lib/auth.js";
import { loginRouter } from "./routes/login/index.js";
import { logoutRouter } from "./routes/logout.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 201,
  })
);

app.options("*", cors());

app.use((req, res, next) => {
  if (req.method === "GET") {
    return next();
  }

  const originHeader = req.headers.origin ?? null;
  const hostHeader = req.headers.host ?? null;

  if (
    !originHeader ||
    !hostHeader ||
    !verifyRequestOrigin(originHeader, [hostHeader])
  ) {
    return res.status(403).end();
  }

  return next();
});

app.use(async (req, res, next) => {
  const sessionId = lucia.readSessionCookie(req.headers.cookie ?? "");

  if (!sessionId) {
    res.locals.user = null;
    res.locals.session = null;
    return next();
  }

  const { session, user } = await lucia.validateSession(sessionId);

  if (session && session.fresh) {
    res.appendHeader(
      "Set-Cookie",
      lucia.createSessionCookie(session.id).serialize()
    );
  }

  if (!session) {
    res.appendHeader(
      "Set-Cookie",
      lucia.createBlankSessionCookie().serialize()
    );
  }

  res.locals.session = session;
  res.locals.user = user;
  return next();
});

app.use(loginRouter, logoutRouter);

app.listen(3000);

console.log("Server running on port 3000");

declare global {
  namespace Express {
    interface Locals {
      user: User | null;
      session: Session | null;
    }
  }
}
