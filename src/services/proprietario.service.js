import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createProprietario(proprietario) {
  return await ProprietarioRepository.insertProprietario(proprietario);
}

async function updateProprietario(proprietario) {
  return await ProprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(proprietario_id) {
  const animais = await AnimalRepository.getAnimalByProprietario(
    proprietario_id
  );

  if (animais.length > 0) {
    return { error: "Proprietário possui animais cadastrados" };
  }

  return await ProprietarioRepository.deleteProprietario(proprietario_id);
}

async function getProprietarios() {
  return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(proprietario_id) {
  return await ProprietarioRepository.getProprietario(proprietario_id);
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};
