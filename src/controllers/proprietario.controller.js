import ProprietarioService from "../services/proprietario.service.js";

async function createProprietario(req, res, next) {
  try {
    const proprietario = req.body;

    res.send(await ProprietarioService.createProprietario(proprietario));
  } catch (error) {
    next(error);
  }
}

async function updateProprietario(req, res, next) {
  try {
    const proprietario = req.body;

    res.send(await ProprietarioService.updateProprietario(proprietario));
  } catch (error) {
    next(error);
  }
}

async function deleteProprietario(req, res, next) {
  try {
    const { proprietario_id } = req.params;

    res.send(await ProprietarioService.deleteProprietario(proprietario_id));
  } catch (error) {
    next(error);
  }
}

async function getProprietarios(req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietarios());
  } catch (error) {
    next(error);
  }
}

async function getProprietario(req, res, next) {
  try {
    const { proprietario_id } = req.params;

    res.send(await ProprietarioService.getProprietario(proprietario_id));
  } catch (error) {
    next(error);
  }
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};
