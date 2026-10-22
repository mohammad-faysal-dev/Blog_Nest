import express, { Application } from "express";
import { postRouter } from "./modules/post/post.route";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { commentRouter } from "./modules/comment/comment.route";
import errorHandler from "./middlewares/globalErrorHandler";
import { notFound } from "./middlewares/notFound";

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://blog-nest-client.vercel.app",
  "https://blog-nest-server-six.vercel.app",
];

const app: Application = express();

// cors first — sets CORS headers for ALL routes (including auth routes called from frontend)
app.use(cors({
  origin: ALLOWED_ORIGINS,
  credentials: true,
}));

app.use(express.json());

// better-auth after cors so auth routes get CORS headers from above
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(errorHandler)
app.use(notFound)
export default app;
