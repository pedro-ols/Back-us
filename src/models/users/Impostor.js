import Player from "./Players.js";

class Impostor extends Player {
    constructor(name, password, currentLocal, alive, group, nickname, role) {
        super(name, password, currentLocal, alive, group, nickname, role);
        this.id = this.generateID();
    }

    generateID() {
        return Math.floor(Math.random() * 999) + 1;
    }

    eliminate(targetPlayer) {
        if (targetPlayer.alive) {
            targetPlayer.alive = false;
            return `${targetPlayer.name} foi eliminado pelo impostor ${this.nickname}.`;
        } else {
            return `${targetPlayer.name} já está eliminado.`;
        }
    }
    
    showRole() {
        return `O jogador ${this.nickname} é um ${this.role}.`;
    }
}

export default Impostor;