import { Router } from "express";

import alunoController from "../controllers/alunoController.js";

const router = Router();

router.get("/", alunoController.index);

export default router;
