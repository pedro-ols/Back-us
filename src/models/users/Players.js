class Player {
    constructor(name, password, currentLocal, deadOrAlive, group, nickname, role){
        this.id = this.generateID();
        this.group = group;
        this.nickname = nickname;
        this.name = name;
        this.password = password;
        this.currentLocal = "Recepção";
        this.deadOrAlive = deadOrAlive;
        this.role = role;
    }
    generateID(){
        return Math.floor(Math.random() * 999) + 1;
    }
    resolveTasks(){

    }
}

export default Player;