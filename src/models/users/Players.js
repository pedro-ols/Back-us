class Player {
    constructor(name, password, currentLocal, alive, group, nickname, role){
        this.id = this.generateID();
        this.group = group;
        this.nickname = nickname;
        this.name = name;
        this.password = password;
        this.currentLocal = currentLocal;
        this.alive = alive;
        this.role = role;
    }
    generateID(){
        return Math.floor(Math.random() * 999) + 1;
    }
    resolveTasks(){

    }
}

export default Player;