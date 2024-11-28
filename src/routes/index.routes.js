import { Router } from "express";

import cadastroRoutes from "./cadastroRoutes.js";

const rotas = Router();

rotas.get("/", (req, res) => {
  res.status(200).send("Servidor rodando e pronto para uso!");
});

// Linkagem das rotas de cadastro
rotas.use("/cadastro", cadastroRoutes); // Integra as rotas de cadastro com o prefixo /cadastro


rotas.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada." });
});

export default rotas;