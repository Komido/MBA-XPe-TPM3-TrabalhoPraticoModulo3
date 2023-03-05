import PostService from "../services/post.service.js";

async function createPost(req, res, next) {
  try {
    const post = req.body;

    res.send(await PostService.createPost(post));
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    const post = req.body;

    res.send(await PostService.updatePost(post));
  } catch (error) {
    next(error);
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
  } catch (error) {
    next(error);
  }
}

async function getPost(req, res, next) {
  try {
    const { id } = req.params;

    res.send(await PostService.getPost(id));
  } catch (error) {
    next(error);
  }
}

async function deletePost(req, res, next) {
  try {
    const { id } = req.params;

    res.send(await PostService.deletePost(id));
  } catch (error) {
    next(error);
  }
}

async function insertComentario(req, res, next) {
  try {
    const comentario = req.body;

    res.send(await PostService.insertComentario(comentario));
  } catch (error) {
    next(error);
  }
}

async function deleteComentario(req, res, next) {
  try {
    const { id, index } = req.params;

    res.send(await PostService.deleteComentario(id, index));
  } catch (error) {
    next(error);
  }
}

export default {
  createPost,
  updatePost,
  getPosts,
  getPost,
  insertComentario,
  deleteComentario,
  deletePost,
};
