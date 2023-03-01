import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(animal_id) {
  return await AnimalRepository.deleteAnimal(animal_id);
}

async function getAnimais() {
  return await AnimalRepository.getAnimais();
}

async function getAnimal(animal_id) {
  return await AnimalRepository.getAnimal(animal_id);
}

async function getAnimalByProprietario(proprietario_id) {
  return await AnimalRepository.getAnimalByProprietario(proprietario_id);
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal,
  getAnimalByProprietario,
};
