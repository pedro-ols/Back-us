import Player from "./Players.js";

// Cria a classe do desenvolvedor
class Developer extends Player {
    // Atributos do desenvolvedor
    constructor(name, password, currentLocal, deadOrAlive, group, nickname, role) {
        // super = herda atributos de Player.js
        super(name, password, currentLocal, deadOrAlive, group, nickname, role);
    }
    // Método para gerar ID aleatorio
    generateID() {
        return Math.floor(Math.random() * 999) + 1;
    }
    // Método para mostrra a sua função
    showRole() {
        return `O jogador ${this.nickname} é um ${this.role}.`;
    }
}

export default Developer;