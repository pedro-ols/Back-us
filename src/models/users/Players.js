class Player {
    constructor(name, password, currentLocal){
        this.id = this.generateID();
        this.name = name;
        this.password = password;
        this.currentLocal = currentLocal;
        this.deadOrAlive = deadOrAlive;
    }

    generateID(){
        return Math.floor(Math.random() * 999) + 1;
    }
    joinGame(){
        
    }
    interact(){

    }

    discuss(){
        
    }
    vote(){

    }
    walk(){
        
    }
    resolveTasks(){

    }
}

export default Player;