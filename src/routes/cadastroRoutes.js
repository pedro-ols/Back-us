import { Router } from "express";

const cadastroRoutes = Router();

// Define uma rota GET no caminho "/listar"
cadastroRoutes.get("/listar", (req, res) => {
    // Chama a função getAllUsers do repositório de usuários para obter a lista de usuários cadastrados
    const alunos = usersRepository.getAllUsers();
    // Retorna uma resposta com status 200 (sucesso) e uma mensagem com a quantidade de usuários e a lista de usuários
    return res.status(200).json({
        message: alunos.length == 0 
        ? "Não há alunos cadastrados"
        : `Total de alunos: ${alunos.length}`, 
    alunos,
    });
});

// Define uma rota POST no caminho "/aadicionar"
cadastroRoutes.post("/adicionar", (req, res) => {
    const {name, email, password} = req.body;

    const usuario = usersRepository.addUser(name, email, password)
// Verifica se o nome foi fornecido
    if(!name){
        return res.status(400).json({
            message:"coloque o nome do aluno"
        })
    }
// Verifica se o email foi fornecido
    if(!email){
        return res.status(400).json({
            message:"coloque o email do aluno"
        })
    }
// Verifica se a senha foi fornecido
    if(!password){
        return res.status(400).json({
            message:"coloque a senha do Aluno"
        })
    }

// Retorna uma resposta com status 201 (criado) e uma mensagem de sucesso junto com os dados do usuário cadastrado
    return res.status(201).json({
        message:"Usuário cadastrado com sucesso",
        usuario,
    })
})


// Define uma rota PUT no caminho "/atualizar"
cadastroRoutes.put("/atualizar", (req, res) => {
    // Extrai os campos id, name, email e password do corpo da requisição
    const { id, name, email, password } = req.body;

    // Chama a função updateUser do repositório de usuários para atualizar o usuário com os dados fornecidos
    const usuario = usersRepository.updateUser(id, name, email, password);

    // Verifica se o usuário foi encontrado e atualizado
    if (!usuario) {
        // Se o usuário não foi encontrado, retorna uma resposta com status 404 (não encontrado) e uma mensagem de erro
        return res.status(404).json({
            message: "Usuário não encontrado",
        });
    }

    // Se o usuário foi atualizado com sucesso, retorna uma resposta com status 200 (sucesso) e uma mensagem de sucesso junto com os dados do usuário atualizado
    return res.status(200).json({
        message: "Usuário atualizado com sucesso",
        usuario,
    });
});


// Define uma rota DELETE no caminho "/remover"
cadastroRoutes.delete("/remover", (req, res) => {
    const { id } = req.body;

    const usuario = usersRepository.deleteUser(id);
 // Verifica se o usuário foi encontrado e deletado
    if (!usuario) {
    // Se o usuário não foi encontrado, retorna uma resposta com status 404 (não encontrado) e uma mensagem
        return res.status(404).json({
            message: "Usuário não encontrado",
        });
    }
 // Se o usuário foi removido com sucesso, retorna uma resposta com status 200 (sucesso) e uma mensagem de sucesso junto com os dados do usuário removido
    return res.status(200).json({
        message: "Usuário removido com sucesso",
    });
});

export default cadastroRoutes;