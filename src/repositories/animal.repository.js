import Animal from "../models/animal.model.js";
import Proprietario from "../models/proprietario.model.js";

async function insertAnimal(animal) {
  try {
    const response = await Animal.create(animal);

    return response;
  } catch (error) {
    throw error;
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: {
        animal_id: animal.animal_id,
      },
    });

    return await getAnimal(animal.animal_id);
  } catch (error) {
    throw error;
  }
}

async function deleteAnimal(animal_id) {
  try {
    await Animal.destroy({ where: { animal_id } });
  } catch (error) {
    throw error;
  }
}

async function getAnimais() {
  try {
    const response = await Animal.findAll({
      include: [{ model: Proprietario }],
    });

    return response;
  } catch (error) {
    throw error;
  }
}

async function getAnimal(animal_id) {
  try {
    const response = await Animal.findByPk(animal_id);

    return response;
  } catch (error) {
    throw error;
  }
}

async function getAnimalByProprietario(proprietario_id) {
  try {
    const response = await Animal.findAll({ where: { proprietario_id } });

    return response;
  } catch (error) {
    throw error;
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
