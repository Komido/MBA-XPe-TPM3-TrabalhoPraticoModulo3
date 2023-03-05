import PostRepository from "../repositories/post.repository.js";

async function createPost(post) {
  return await PostRepository.createPost(post);
}

async function updatePost(post) {
  return await PostRepository.updatePost(post);
}

async function getPosts() {
  return await PostRepository.getPosts();
}

async function getPost(id) {
  return await PostRepository.getPost(id);
}

async function deletePost(id) {
  return await PostRepository.deletePost(id);
}

async function insertComentario(comentario) {
  return await PostRepository.insertComentario(comentario);
}

async function deleteComentario(id, index) {
  return await PostRepository.deleteComentario(id, index);
}

export default {
  createPost,
  getPosts,
  getPost,
  insertComentario,
  updatePost,
  deleteComentario,
  deletePost,
};
