import { connect } from "./_db.js";

async function insertProprietario(proprietario) {
  const conn = await connect();
  try {
    const sql = `INSERT INTO public.proprietarios (nome, telefone) VALUES($1, $2) RETURNING *;`;
    const values = [proprietario.nome, proprietario.telefone];

    const response = await conn.query(sql, values);

    return response.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function updateProprietario(proprietario) {
  const conn = await connect();
  try {
    const sql = `UPDATE public.proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *;`;
    const values = [
      proprietario.nome,
      proprietario.telefone,
      proprietario.proprietario_id,
    ];

    const response = await conn.query(sql, values);

    return response.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteProprietario(proprietario_id) {
  const conn = await connect();
  try {
    const sql = `DELETE FROM public.proprietarios WHERE proprietario_id = $1 RETURNING *;`;
    const values = [proprietario_id];

    const response = await conn.query(sql, values);

    return response.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getProprietarios() {
  const conn = await connect();
  try {
    const sql = `SELECT * FROM public.proprietarios;`;

    const response = await conn.query(sql);

    return response.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getProprietario(proprietario_id) {
  const conn = await connect();
  try {
    const sql = `SELECT * FROM public.proprietarios WHERE proprietario_id = $1;`;
    const values = [proprietario_id];

    const response = await conn.query(sql, values);

    return response.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  insertProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};
