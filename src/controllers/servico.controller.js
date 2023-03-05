import ServicoService from "../services/servico.service.js";

async function createServico(req, res, next) {
  try {
    const servico = req.body;

    res.send(await ServicoService.createServico(servico));
  } catch (error) {
    next(error);
  }
}

async function updateServico(req, res, next) {
  try {
    const servico = req.body;

    res.send(await ServicoService.updateServico(servico));
  } catch (error) {
    next(error);
  }
}

async function deleteServico(req, res, next) {
  try {
    const { servico_id } = req.params;

    res.send(await ServicoService.deleteServico(servico_id));
  } catch (error) {
    next(error);
  }
}

async function getServicos(req, res, next) {
  try {
    res.send(await ServicoService.getServicos());
  } catch (error) {
    next(error);
  }
}

async function getServico(req, res, next) {
  try {
    const { servico_id } = req.params;

    res.send(await ServicoService.getServico(servico_id));
  } catch (error) {
    next(error);
  }
}

async function getServicoByProprietario(req, res, next) {
  try {
    const { proprietario_id } = req.query;

    res.send(await ServicoService.getServicoByProprietario(proprietario_id));
  } catch (error) {
    next(error);
  }
}

export default {
  createServico,
  updateServico,
  deleteServico,
  getServicos,
  getServico,
  getServicoByProprietario,
};
