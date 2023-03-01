import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    const animal = req.body;

    res.send(await AnimalService.createAnimal(animal));
  } catch (error) {
    next(error);
  }
}

async function updateAnimal(req, res, next) {
  try {
    const animal = req.body;

    res.send(await AnimalService.updateAnimal(animal));
  } catch (error) {
    next(error);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    const { animal_id } = req.params;

    res.send(await AnimalService.deleteAnimal(animal_id));
  } catch (error) {
    next(error);
  }
}

async function getAnimais(req, res, next) {
  try {
    res.send(await AnimalService.getAnimais());
  } catch (error) {
    next(error);
  }
}

async function getAnimal(req, res, next) {
  try {
    const { animal_id } = req.params;

    res.send(await AnimalService.getAnimal(animal_id));
  } catch (error) {
    next(error);
  }
}

async function getAnimalByProprietario(req, res, next) {
  try {
    const { proprietario_id } = req.query;

    res.send(await AnimalService.getAnimalByProprietario(proprietario_id));
  } catch (error) {
    next(error);
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal,
  getAnimalByProprietario,
};
