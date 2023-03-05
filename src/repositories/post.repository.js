import { getClient } from "./_db.mongo.js";
import { ObjectId } from "mongodb";

async function createPost(post) {
  const client = await getClient();
  try {
    await client.connect();
    const result = await client
      .db("blogpet")
      .collection("posts")
      .insertOne(post);

    return result;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function updatePost(post) {
  const client = await getClient();
  try {
    await client.connect();
    const result = await client
      .db("blogpet")
      .collection("posts")
      .updateOne(
        { _id: new ObjectId(post["_id"]) },
        {
          $set: {
            titulo: post.titulo,
            descricao: post.descricao,
            comentarios: post.comentarios || [],
          },
        }
      );

    return result;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getPosts() {
  const client = await getClient();
  try {
    await client.connect();
    const result = await client
      .db("blogpet")
      .collection("posts")
      .find({})
      .toArray();

    return result;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getPost(id) {
  const client = await getClient();
  try {
    await client.connect();
    const result = await client
      .db("blogpet")
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });

    return result;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function deletePost(id) {
  const client = await getClient();
  try {
    await client.connect();
    const result = await client
      .db("blogpet")
      .collection("posts")
      .deleteOne({ _id: new ObjectId(id) });

    return result;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function insertComentario(comentario) {
  const client = await getClient();
  try {
    await client.connect();
    const result = await client
      .db("blogpet")
      .collection("posts")
      .updateOne(
        { _id: new ObjectId(comentario["_id"]) },
        {
          $push: {
            comentarios: {
              nome: comentario.nome,
              conteudo: comentario.conteudo,
            },
          },
        }
      );

    return result;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function deleteComentario(id, index) {
  try {
    const post = await getPost(id);
    post.comentarios.splice(index, 1);
    await updatePost(post);
  } catch (error) {
    throw error;
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
