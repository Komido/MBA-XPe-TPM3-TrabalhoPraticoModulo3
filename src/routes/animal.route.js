import express from "express";

import AnimalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", AnimalController.createAnimal);
router.put("/", AnimalController.updateAnimal);
router.delete("/:animal_id", AnimalController.deleteAnimal);
router.get("/all", AnimalController.getAnimais);
router.get("/:animal_id", AnimalController.getAnimal);
router.get("/", AnimalController.getAnimalByProprietario);

export default router;
