import { Request, Response } from "express"
import { CommentService } from "./comment.service"
import { error } from "node:console"

const createComment = async (req: Request, res: Response) => {
    try {
        const user = req.user
        req.body.authorId = user?.id
        const result = await CommentService.createComment(req.body)
        res.status(200).json(result)
    }
    catch (e) {
        res.status(400).json({
            error: "Comment creation failed"
        })
    }
}

const getCommentById = async (req: Request, res: Response) => {
    try {
        const { commentId } = req.params
        const result = await CommentService.getCommentById(commentId as string)
        res.status(200).json(result)

    } catch (e) {
        res.status(400).json({
            error: "Comment fetched failed",
            details: e
        })
    }
}

const getCommentByAuthor = async (req: Request, res: Response) => {
    try {
        const { authorId } = req.params
        const result = await CommentService.getCommentByAuthor(authorId as string)
        res.status(200).json(result)
    }
    catch (e) {
        res.status(400).json({
            error: "Failed to fetch comments by author",
            details: e
        })
    }
}

const deleteComment = async (req: Request, res: Response) => {
    try {
        const user = req.user
        const { commentId } = req.params
        const result = await CommentService.deleteComment(commentId as string, user?.id as string)
        res.status(200).json(result)
    }
    catch (e) {
        res.status(400).json({
            message: "Failed to delete comment",
            detais: e
        })
    }

}

const updateComment = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const { commentId } = req.params
        const result = await CommentService.updateComment(commentId as string, req.body, user?.id as string)
        res.status(200).json(result)
    }
    catch (e) {
        res.status(400).json({
            message: "Comment update failed",
            details: e
        })
    }
}

export const CommentController = {
    createComment,
    getCommentById,
    getCommentByAuthor,
    deleteComment,
    updateComment
}