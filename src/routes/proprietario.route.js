import express from "express";

import ProprietarioController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.post("/", ProprietarioController.createProprietario);
router.put("/", ProprietarioController.updateProprietario);
router.delete("/:proprietario_id", ProprietarioController.deleteProprietario);
router.get("/", ProprietarioController.getProprietarios);
router.get("/:proprietario_id", ProprietarioController.getProprietario);

export default router;
