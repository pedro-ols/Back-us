import { Router } from "express";

const cadastroRoutes = Router();

cadastroRoutes.get("/listar", (req, res) => {
    const alunos = usersRepository.getAllUsers();
    return res.status(200).json({
        message: alunos.length == 0 
        ? "Não há alunos cadastrados"
        : `Total de alunos: ${alunos.length}`, 
    alunos,
    });
});

cadastroRoutes.post("/adicionar", (req, res) => {
    const {name, email, password} = req.body;

    const usuario = usersRepository.addUser(name, email, password)

    return res.status(201).json({
        message:"Usuário cadastrado com sucesso",
        usuario,
    })
})


cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;