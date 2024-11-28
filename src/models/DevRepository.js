import Dev from "./Dev.js"; // Importa a classe Dev de um arquivo externo, permitindo a criação de instâncias de Dev.

class DevRepository { // Define a classe DevRepository, que gerencia uma coleção de desenvolvedores (Dev).
    constructor(){ // Construtor da classe DevRepository.
       this.devs = [] // Inicializa a propriedade devs como um array vazio para armazenar os desenvolvedores.
    }

    getAlldevs() { // Método para obter todos os desenvolvedores.
        return this.devs; // Retorna o array de desenvolvedores.
    }

    addDev(grupo, nome, apelido, estaVivo, localAtual, tempoDesocupado, votos, jaVotou, pontos){ // Método para adicionar um novo desenvolvedor.
        const newDev = new Dev(grupo, nome, apelido, estaVivo, localAtual, tempoDesocupado, votos, jaVotou, pontos); // Cria uma nova instância de Dev com os dados fornecidos.

        this.devs.push(newDev); // Adiciona o novo desenvolvedor ao array devs.

        return newDev; // Retorna a nova instância de Dev criada.
    }

    getdevById(id) { // Método para buscar um desenvolvedor pelo seu ID.
        const u = this.devs.find(u => u.id == id); // Usa o método find para localizar o desenvolvedor com o ID correspondente.
        return u; // Retorna o desenvolvedor encontrado ou undefined se não existir.
    }

    updateDev(id, grupo, nome, apelido, estaVivo, localAtual, tempoDesocupado, votos, jaVotou, pontos) { // Método para atualizar os dados de um desenvolvedor existente.
        const dev = this.getdevById(id) // Busca o desenvolvedor pelo ID.

        if(!dev){ // Verifica se o desenvolvedor foi encontrado.
            return null; // Retorna null se o desenvolvedor não existir.
        }

        dev.grupo = grupo; // Atualiza o nome do desenvolvedor.
        dev.nome = nome; // Atualiza o nome do desenvolvedor.
        dev.apelido = apelido; // Atualiza a senha do desenvolvedor.
        dev.estaVivo = estaVivo; // Atualiza o nome do desenvolvedor.
        dev.localAtual = localAtual; // Atualiza o localAtual do desenvolvedor.
        dev.tempoDesocupado = tempoDesocupado; // Atualiza a senha do desenvolvedor.
        dev.votos = votos; // Atualiza o nome do desenvolvedor.
        dev.jaVotou = jaVotou; // Atualiza o nome do desenvolvedor.
        dev.pontos = pontos; // Atualiza a senha do desenvolvedor.

        return dev; // Retorna o desenvolvedor atualizado.
    };

    deletedev(id){ // Método para deletar um desenvolvedor pelo seu ID.
        const dev = this.getdevById(id); // Busca o desenvolvedor pelo ID.

        if(!dev){ // Verifica se o desenvolvedor foi encontrado.
            return null; // Retorna null se o desenvolvedor não existir.
        };

        this.devs = this.devs.filter((d) => d.id != id); // Filtra o array devs para remover o desenvolvedor com o ID correspondente.

        return dev; // Retorna o desenvolvedor que foi deletado.
    }
};

export default DevRepository; // Exporta a classe DevRepository para que possa ser utilizada em outros módulos.