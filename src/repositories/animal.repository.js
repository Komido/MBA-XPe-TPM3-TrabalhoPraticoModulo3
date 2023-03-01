import { connect } from "./_db.js";

async function insertAnimal(animal) {
  const conn = await connect();
  try {
    const sql = `INSERT INTO public.animais
    (nome, tipo, proprietario_id)
    VALUES($1, $2, $3) RETURNING *;`;
    const values = [animal.nome, animal.tipo, animal.proprietario_id];

    const response = await conn.query(sql, values);

    return response.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function updateAnimal(animal) {
  const conn = await connect();
  try {
    const sql = `UPDATE public.animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4 RETURNING *;`;
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id,
      animal.animal_id,
    ];

    const response = await conn.query(sql, values);

    return response.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(animal_id) {
  const conn = await connect();
  try {
    const sql = `DELETE FROM public.animais WHERE animal_id = $1 RETURNING *;`;
    const values = [animal_id];

    const response = await conn.query(sql, values);

    return response.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimais() {
  const conn = await connect();
  try {
    const sql = `SELECT * FROM public.animais;`;

    const response = await conn.query(sql);

    return response.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimal(animal_id) {
  const conn = await connect();
  try {
    const sql = `SELECT * FROM public.animais WHERE animal_id = $1;`;
    const values = [animal_id];

    const response = await conn.query(sql, values);

    return response.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimalByProprietario(proprietario_id) {
  const conn = await connect();
  try {
    const sql = `SELECT * FROM public.animais WHERE proprietario_id = $1;`;
    const values = [proprietario_id];

    const response = await conn.query(sql, values);

    return response.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal,
  getAnimalByProprietario,
};
