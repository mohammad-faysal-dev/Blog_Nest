import { Request, Response } from "express";
import { postService } from "./post.service";
import { PostStatus } from "../../../generated/prisma/enums";
import paginationSortingHelper from "../../helpers/paginationSortingHelper";
import { error } from "node:console";
import { UserRole } from "../../middlewares/auth";

const createPost = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({
        error: "unauthorized",
      });
    }
    const result = await postService.createPost(req.body, user.id as string);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({
      error: "Post creation failed",
      details: e,
    });
  }
};
const getAllPost = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    const searchString = typeof search === "string" ? search : undefined;
    const tags = req.query.tags ? (req.query.tags as string).split(",") : [];
    const isFeatured = req.query.isFeatured
      ? req.query.isFeatured === "true"
        ? true
        : req.query.isFeatured === "false"
          ? false
          : undefined
      : undefined;
    const status = req.query.status as PostStatus;
    const authorId = req.query.authorId as string | undefined;
    const { page, limit, skip, sortBy, sortOrder } = paginationSortingHelper(
      req.query,
    );
    const result = await postService.getAllPost({
      search: searchString,
      tags,
      isFeatured,
      status,
      authorId,
      page,
      limit,
      skip,
      sortBy,
      sortOrder,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({
      error: "Post fetch failed",
      details: e,
    });
  }
};
const getPostById = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const result = await postService.getPostById(postId as string);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({
      error: "post fetched failed",
      details: e,
    });
  }
};

const getMyPosts = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      throw new Error("Unauthorized access. User information is missing.");
    }
    const result = await postService.getMyPosts(user?.id as string);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({
      message: "Failed to fetch my posts",
      details: e,
    });
  }
};
const updatePost = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const user = req.user;
    const isAdmin = user?.role === UserRole.ADMIN;
    if (!user) {
      throw new Error("Unauthorized access. User information is missing.");
    }
    
    const result = await postService.updatePost(
      postId as string,
      req.body,
      user?.id as string,
      isAdmin,
    );
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({
      message: "Failed to update post",
      details: e,
    });
  }
};
export const PostController = {
  createPost,
  getAllPost,
  getPostById,
  getMyPosts,
  updatePost,
};
