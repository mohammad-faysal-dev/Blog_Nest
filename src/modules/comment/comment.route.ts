import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { CommentController } from "./comment.controller";

const router = express.Router()

router.get("/author/:authorId", CommentController.getCommentByAuthor)

router.get("/:commentId", CommentController.getCommentById)

router.post("/", auth(UserRole.USER, UserRole.ADMIN), CommentController.createComment)
router.delete("/:commentId", auth(UserRole.USER, UserRole.ADMIN), CommentController.deleteComment)

export const commentRouter = router;