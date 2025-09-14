/**
 * Create a home object, populate some HTML to display its properties.
 */
import home from "./home.js";
import chessGame from "./chess.js";

const markup = (home) => {
  return `
  <div>
    <h3>${home.location}</h3>
    <ul>
      <li>Furniture:</li>
      <ul>
        ${home.furniture.map(item => `
          <li>${item.type} - ${item.color}</li>
        `).join("")}
      </ul>
    </ul>
    <ul>
      <li>Appliance:</li>
      <ul>
        ${home.appliances.map(item => `
          <li>${item.type} - ${item.brand}</li>
        `).join("")}
      </ul>
  </div>
`;
};

const markupChessGame = (chessGame) =>{
    return `
    <div>
      <h3>Chess Game Summary</h3>
      <p>Player: ${chessGame.player.name} (${chessGame.player.color})</p>
      <p>Opponent: ${chessGame.opponent.name} (${chessGame.opponent.color})</p>
      <p>Moves Played: ${chessGame.move.length}</p>
      <p>Bilan</p>
      <p>${chessGame.bilan()}</p>
    </div>
  `;
}

const main = document.createElement("main");
main.innerHTML = markup(home);
main.innerHTML += markupChessGame(chessGame);
document.body.appendChild(main);
