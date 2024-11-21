import Player from "./Players.js";

class Developer extends Player {
    constructor(name, password, currentLocal, deadOrAlive, group, nickname, role) {
        super(name, password, currentLocal, deadOrAlive, group, nickname, role);
    }

    generateID() {
        return Math.floor(Math.random() * 999) + 1;
    }
    
    showRole() {
        return `O jogador ${this.nickname} é um ${this.role}.`;
    }
}

export default Developer;