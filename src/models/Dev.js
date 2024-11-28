import Aluno from "./Aluno.js"; // Importa a classe Aluno de um arquivo externo, permitindo que a classe Dev herde suas propriedades e métodos.

class Dev extends Aluno { // Define a classe Dev que herda da classe Aluno.
  constructor(aluno) { // Construtor da classe Dev que recebe um objeto aluno como parâmetro.
    super( // Chama o construtor da classe pai (Aluno) para inicializar suas propriedades.
      aluno.grupo, // Passa o grupo do aluno para a classe pai. 
      aluno.nome, // Passa o nome do aluno para a classe pai.
      aluno.apelido, // Passa o apelido do aluno para a classe pai.
      aluno.pegarSenha(), // Chama o método pegarSenha() do aluno para passar a senha à classe pai.
      aluno.estaVivo // Passa o estado de vida do aluno (se está vivo ou não) para a classe pai.
    );
    this.localAtual = "Recepção"; // Define a propriedade localAtual, que indica onde o Dev está localizado.
    this.tempoDesocupado = Date.now(); // Define a propriedade tempoDesocupado com a data e hora atuais, indicando quando o Dev ficou desocupado.
    this.votos = 0; // Inicializa a contagem de votos do Dev em 0.
    this.jaVotou = false; // Inicializa a propriedade jaVotou como false, indicando que o Dev ainda não votou.
    this.pontos = 0; // Inicializa a pontuação do Dev em 0.
  }

  mostrarPapel() { // Método que retorna uma string descrevendo o papel do Dev.
    return `Sou jogador ${this.apelido} e sou um Dev com objetivo de resolver todos os problemas backends do SENAI 🎉`;
  }

  votar(alvo) { // Método que permite que o Dev vote em outro jogador (alvo).
    if (this.jaVotou === true) { // Verifica se o Dev já votou.
      throw new Error("Você já votou nesta rodada."); // Lança um erro se o Dev já tiver votado.
    }
    alvo.votos++; // Incrementa o número de votos do jogador alvo.
    this.jaVotou = true; // Marca que o Dev já votou.
    return `O jogador ${alvo.apelido} foi votado pelo ${this.apelido} 😈`; // Retorna uma mensagem informando que o alvo foi votado.
  }
}

export default Dev; // Exporta a classe Dev para que possa ser utilizada em outros módulos.