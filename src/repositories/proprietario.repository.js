import Proprietario from "../models/proprietario.model.js";
import Animal from "../models/animal.model.js";

async function insertProprietario(proprietario) {
  try {
    const response = await Proprietario.create(proprietario);

    return response;
  } catch (error) {
    throw error;
  }
}

async function updateProprietario(proprietario) {
  try {
    await Proprietario.update(proprietario, {
      where: { proprietario_id: proprietario.proprietario_id },
    });

    return await getProprietario(proprietario.proprietario_id);
  } catch (error) {
    throw error;
  }
}

async function deleteProprietario(proprietario_id) {
  const conn = await connect();
  try {
    await Proprietario.destroy({
      where: { proprietario_id: proprietario_id },
    });
  } catch (error) {
    throw error;
  }
}

async function getProprietarios() {
  try {
    const response = await Proprietario.findAll({
      include: [{ Model: Animal }],
    });

    return response;
  } catch (error) {
    throw error;
  }
}

async function getProprietario(proprietario_id) {
  try {
    const response = await Proprietario.findByPk(proprietario_id);

    return response;
  } catch (error) {
    throw error;
  }
}

export default {
  insertProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};
