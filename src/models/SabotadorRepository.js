import Sabotador from "./Sabotador.js"; // Importa a classe sabotador de um arquivo externo, permitindo a criação de instâncias de sabotador.

class SabotadorRepository { // Define a classe sabotadorRepository, que gerencia uma coleção de desenvolvedores (sabotador).
    constructor(){ // Construtor da classe sabotadorRepository.
       this.sabotadores = [] // Inicializa a propriedade sabotadores como um array vazio para armazenar os desenvolvedores.
    }

    getAllsabotadores() { // Método para obter todos os desenvolvedores.
        return this.sabotadores; // Retorna o array de desenvolvedores.
    }

    addSabotador(grupo, nome, apelido, estaVivo, localAtual, tempoDesocupado, votos, jaVotou, pontos){ // Método para adicionar um novo desenvolvedor.
        const newSabotador = new sabotador(grupo, nome, apelido, estaVivo, localAtual, tempoDesocupado, votos, jaVotou, pontos); // Cria uma nova instância de sabotador com os dados fornecidos.

        this.sabotadores.push(newSabotador); // Adiciona o novo desenvolvedor ao array sabotadores.

        return newSabotador; // Retorna a nova instância de sabotador criada.
    }

    getsabotadorById(id) { // Método para buscar um desenvolvedor pelo seu ID.
        const u = this.sabotadores.find(u => u.id == id); // Usa o método find para localizar o desenvolvedor com o ID correspondente.
        return u; // Retorna o desenvolvedor encontrado ou undefined se não existir.
    }

    updatesabotador(id, grupo, nome, apelido, estaVivo, localAtual, tempoDesocupado, votos, jaVotou, pontos) { // Método para atualizar os dados de um desenvolvedor existente.
        const sabotador = this.getsabotadorById(id) // Busca o desenvolvedor pelo ID.

        if(!sabotador){ // Verifica se o desenvolvedor foi encontrado.
            return null; // Retorna null se o desenvolvedor não existir.
        }

        sabotador.grupo = grupo; // Atualiza o nome do desenvolvedor.
        sabotador.nome = nome; // Atualiza o nome do desenvolvedor.
        sabotador.apelido = apelido; // Atualiza a senha do desenvolvedor.
        sabotador.estaVivo = estaVivo; // Atualiza o nome do desenvolvedor.
        sabotador.localAtual = localAtual; // Atualiza o localAtual do desenvolvedor.
        sabotador.tempoDesocupado = tempoDesocupado; // Atualiza a senha do desenvolvedor.
        sabotador.votos = votos; // Atualiza o nome do desenvolvedor.
        sabotador.jaVotou = jaVotou; // Atualiza o nome do desenvolvedor.
        sabotador.pontos = pontos; // Atualiza a senha do desenvolvedor.

        return sabotador; // Retorna o desenvolvedor atualizado.
    };

    deletesabotador(id){ // Método para deletar um desenvolvedor pelo seu ID.
        const sabotador = this.getsabotadorById(id); // Busca o desenvolvedor pelo ID.

        if(!sabotador){ // Verifica se o desenvolvedor foi encontrado.
            return null; // Retorna null se o desenvolvedor não existir.
        };

        this.sabotadores = this.sabotadores.filter((d) => d.id != id); // Filtra o array sabotadores para remover o desenvolvedor com o ID correspondente.

        return sabotador; // Retorna o desenvolvedor que foi deletado.
    }
};

export default sabotadorRepository; // Exporta a classe sabotadorRepository para que possa ser utilizada em outros módulos.