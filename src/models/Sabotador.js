import Aluno from "./Aluno.js"; // Importa a classe Aluno de um arquivo externo, permitindo que a classe Sabotador herde suas propriedades e métodos.

class Sabotador extends Aluno { // Define a classe Sabotador que herda da classe Aluno.
  constructor(aluno) { // Construtor da classe Sabotador que recebe um objeto aluno como parâmetro.
    super( // Chama o construtor da classe pai (Aluno) para inicializar suas propriedades.
      aluno.grupo, // Passa o grupo do aluno para a classe pai.
      aluno.nome, // Passa o nome do aluno para a classe pai.
      aluno.apelido, // Passa o apelido do aluno para a classe pai.
      aluno.pegarSenha(), // Chama o método pegarSenha() do aluno para passar a senha à classe pai.
      aluno.estaVivo // Passa o estado de vida do aluno (se está vivo ou não) para a classe pai.
    );
    this.localAtual = "Recepção"; // Define a propriedade localAtual, que indica onde o Sabotador está localizado.
    this.tempoDesocupado = Date.now(); // Define a propriedade tempoDesocupado com a data e hora atuais, indicando quando o Sabotador ficou desocupado.
    this.votos = 0; // Inicializa a contagem de votos do Sabotador em 0.
    this.jaVotou = false; // Inicializa a propriedade jaVotou como false, indicando que o Sabotador ainda não votou.
    this.pontos = 0; // Inicializa a pontuação do Sabotador em 0.
  }

  mostrarPapel() { // Método que retorna uma string descrevendo o papel do Sabotador.
    return `Sou jogador ${this.apelido} e sou um SABOTADOR com objetivo de atrapalhar a vida dos DEVs do SENAI ☠️`;
  }

  eliminar(alvo) { // Método que permite que o Sabotador elimine outro jogador (alvo).
    return `O jogador ${alvo.apelido} foi eliminado pelo SABOTADOR ${this.apelido} 😈`; // Retorna uma mensagem informando que o alvo foi eliminado pelo Sabotador.
  }

  votar(alvo) { // Método que permite que o Sabotador vote em outro jogador (alvo).
    if (this.jaVotou === true) { // Verifica se o Sabotador já votou.
      throw new Error("Você já votou nesta rodada."); // Lança um erro se o Sabotador já tiver votado.
    }
    alvo.votos++; // Incrementa o número de votos do jogador alvo.
    this.jaVotou = true; // Marca que o Sabotador já votou.
    return `O jogador ${alvo.apelido} foi votado pelo ${this.apelido} 😈`; // Retorna uma mensagem informando que o alvo foi votado.
  }
}

export default Sabotador; // Exporta a classe Sabotador para que possa ser utilizada em outros módulos.