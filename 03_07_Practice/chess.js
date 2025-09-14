const chessGame = {
    player: {
        name:"LaudeDignus",
        color:"white",
        precision:0.95
    },
    opponent: {
        name:"Stockfish",
        color:"black",
        precision:0.98
    },
    move: [
        { player: "white", from: "e2", to: "e4" },
        { player: "black", from: "e7", to: "e5" }
    ],
    bilan: function (){
        return `
        <p>Player: ${this.player.name} (${this.player.color})</p>
        <p>Opponent: ${this.opponent.name} (${this.opponent.color})</p>
        <p>Moves Played: ${this.move.length}</p>
        <p>List of Moves:</p>
        <ul>
        ${this.move.map(m => `<li>${m.player} : ${m.from} -> ${m.to}</li>`).join("")}
        </ul>
        `;
    }
}

export default chessGame;