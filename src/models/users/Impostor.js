import Player from "./Players.js";

class Impostor extends Player {
    constructor(name, password, currentLocal, deadOrAlive, group, nickname, role){
        super(name, password, currentLocal, deadOrAlive, group, nickname, role)
        this.id = this.generateID();
    }
    generateID(){
        return Math.floor(Math.random() * 999) + 1;
    }
    eliminate(){

    }
    showRole(role){
        return `O jogador é um ${role}.`
    }
}

export default Impostor;