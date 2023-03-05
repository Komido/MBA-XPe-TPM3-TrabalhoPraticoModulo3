import express from "express";

import ServicoController from "../controllers/servico.controller.js";

const router = express.Router();

router.post("/", ServicoController.createServico);
router.put("/", ServicoController.updateServico);
router.delete("/:servico_id", ServicoController.deleteServico);
router.get("/all", ServicoController.getServicos);
router.get("/:servico_id", ServicoController.getServico);
router.get("/", ServicoController.getServicoByProprietario);

export default router;
