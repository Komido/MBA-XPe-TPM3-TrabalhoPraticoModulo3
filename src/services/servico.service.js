import servicoRepository from "../repositories/servico.repository.js";

async function createServico(servico) {
  return await servicoRepository.insertServico(servico);
}

async function updateServico(servico) {
  return await servicoRepository.updateServico(servico);
}

async function deleteServico(servico_id) {
  return await servicoRepository.deleteServico(servico_id);
}

async function getServicos() {
  return await servicoRepository.getServicos();
}

async function getServico(servico_id) {
  return await servicoRepository.getServico(servico_id);
}

async function getServicoByProprietario(proprietario_id) {
  return await servicoRepository.getServicoByProprietario(proprietario_id);
}

export default {
  createServico,
  updateServico,
  deleteServico,
  getServicos,
  getServico,
  getServicoByProprietario,
};
