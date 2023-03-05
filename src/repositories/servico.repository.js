import Servico from "../models/servico.model.js";
import Animal from "../models/animal.model.js";

async function insertServico(servico) {
  try {
    const response = await Servico.create(servico);

    return response;
  } catch (error) {
    throw error;
  }
}

async function updateServico(servico) {
  try {
    await Servico.update(servico, {
      where: { servico_id: servico.servico_id },
    });

    return await getServico(servico.servico_id);
  } catch (error) {
    throw error;
  }
}

async function deleteServico(servico_id) {
  try {
    await Servico.destroy({ where: { servico_id } });
  } catch (error) {
    throw error;
  }
}

async function getServicos() {
  try {
    const response = await Servico.findAll({ include: [{ model: Animal }] });

    return response;
  } catch (error) {
    throw error;
  }
}

async function getServico(servico_id) {
  try {
    const response = await Servico.findByPk(servico_id);

    return response;
  } catch (error) {
    throw error;
  }
}

async function getServicoByProprietario(proprietario_id) {
  try {
    const response = await Servico.findAll({
      include: [{ model: Animal, where: { proprietario_id } }],
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export default {
  insertServico,
  updateServico,
  deleteServico,
  getServicos,
  getServico,
  getServicoByProprietario,
};
