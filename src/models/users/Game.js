//Cria a classe do jogo
class Game {
    // Atributos
    constructor(name, activePlayers = [], inactivePlayers = []) {
        this.name = name;
        this.activePlayers = activePlayers; 
        this.inactivePlayers = inactivePlayers; 
        this.isActive = false; 
    }

    //Método para iniciar o jogo
    startGame() {

        // Validação de mínimo de players
        if (this.activePlayers.length < 3) {
            console.log("É necessário pelo menos 3 jogadores para iniciar o jogo.");
        }

        // Método para começar o jogo        
        this.isActive = true;
        console.log(`O jogo "${this.name}" começou com os seguintes jogadores:`);
        this.activePlayers.forEach(player => {
            console.log(`- ${player.nickname}`);
        });
    }

    //Método para a pontuação do jogo
    scoring() {
        
        //validação
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

    // Para terminar o jogo
    endGame() {
        this.isActive = false;
        console.log(`O jogo "${this.name}" terminou.`);
    }
}

export default Game;