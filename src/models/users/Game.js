class Game {
    constructor(name, activePlayers = [], inactivePlayers = []) {
        this.name = name;
        this.activePlayers = activePlayers; 
        this.inactivePlayers = inactivePlayers; 
        this.isActive = false; 
    }

    startGame() {
        if (this.activePlayers.length < 2) {
            console.log("É necessário pelo menos 2 jogadores para iniciar o jogo.");
            return;
        }
        
        this.isActive = true;
        console.log(`O jogo "${this.name}" começou com os seguintes jogadores:`);
        this.activePlayers.forEach(player => {
            console.log(`- ${player.nickname}`);
        });
    }

    scoring() {
        if (!this.isActive) {
            console.log("O jogo não está ativo. Não é possível calcular a pontuação.");
            return;
        }

        
        const scores = this.activePlayers.map(player => {
            
            return {
                nickname: player.nickname,
                score: player.calculateScore() 
            };
        });

        scores.sort((a, b) => b.score - a.score);

        console.log("Pontuação atual:");
        scores.forEach(playerScore => {
            console.log(`${playerScore.nickname}: ${playerScore.score}`);
        });
    }

    endGame() {
        this.isActive = false;
        console.log(`O jogo "${this.name}" terminou.`);
    }
}

export default Game;