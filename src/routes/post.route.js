import express from "express";

import PostController from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", PostController.createPost);
router.put("/", PostController.updatePost);
router.get("/all", PostController.getPosts);
router.get("/:id", PostController.getPost);
router.delete("/:id", PostController.deletePost);
router.post("/comentario", PostController.insertComentario);
router.delete("/comentario/:id/:index", PostController.deleteComentario);

export default router;
