const games = new Map(); // Make sure this is shared between tictactoe.js and place.js

module.exports = {
  name: "place",
  alias: ["move", "ttmove"],
  category: "Games",
  desc: "Place your move in a running Tic-Tac-Toe game",
  use: "$place <1-9>",
  async execute({ m, args, reply, sock }) {
    const position = parseInt(args[0]);
    const gameId = Array.from(games.keys()).find(key => key.startsWith(m.chat));
    if (!gameId) return reply("❌ No active Tic-Tac-Toe game in this chat.");

    const game = games.get(gameId);
    if (!game.players.includes(m.sender)) return reply("❌ You're not a player in this game.");
    if (game.players[game.turn] !== m.sender) return reply("🔄 Wait for your turn!");

    if (isNaN(position) || position < 1 || position > 9) return reply("❗ Choose a valid cell number (1–9).");

    const cellIndex = position - 1;
    const symbol = game.turn === 0 ? "❌" : "⭕";

    if (["❌", "⭕"].includes(game.board[cellIndex])) {
      return reply("🚫 That cell is already taken.");
    }

    game.board[cellIndex] = symbol;

    // Check for winner
    const winConditions = [
      [0,1,2], [3,4,5], [6,7,8], // rows
      [0,3,6], [1,4,7], [2,5,8], // columns
      [0,4,8], [2,4,6]           // diagonals
    ];

    let winner = null;
    for (const cond of winConditions) {
      const [a, b, c] = cond;
      if (game.board[a] === symbol && game.board[b] === symbol && game.board[c] === symbol) {
        winner = game.players[game.turn];
        break;
      }
    }

    const renderBoard = `
🎮 *Tic Tac Toe*
${game.board[0]} | ${game.board[1]} | ${game.board[2]}
${game.board[3]} | ${game.board[4]} | ${game.board[5]}
${game.board[6]} | ${game.board[7]} | ${game.board[8]}
    `;

    if (winner) {
      games.delete(gameId);
      return sock.sendMessage(m.chat, {
        text: `${renderBoard}\n🏆 *Winner:* @${winner.split("@")[0]}`,
        mentions: [winner]
      });
    }

    if (!game.board.some(cell => !["❌", "⭕"].includes(cell))) {
      games.delete(gameId);
      return sock.sendMessage(m.chat, {
        text: `${renderBoard}\n🤝 *It's a draw!*`
      });
    }

    // Next turn
    game.turn = game.turn === 0 ? 1 : 0;
    games.set(gameId, game);

    sock.sendMessage(m.chat, {
      text: `${renderBoard}\n🔄 *Next turn:* @${game.players[game.turn].split("@")[0]}`,
      mentions: [game.players[game.turn]]
    });
  }
};
