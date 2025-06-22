const games = new Map();

module.exports = {
  name: "tictactoe",
  alias: ["ttt"],
  category: "Games",
  desc: "Start a tic-tac-toe game with someone",
  use: "$tictactoe @user",
  async execute({ m, sock, args, reply }) {
    const mention = m.mentionedJid?.[0];
    if (!mention) return reply("❗ Mention someone to challenge. Example:\n$tictactoe @user");

    const id = `${m.chat}-${mention}`;
    if (games.has(id)) return reply("⚠️ There's already a game in progress between you two.");

    // Initialize game state
    const board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
    const game = {
      board,
      players: [m.sender, mention],
      turn: 0,
    };
    games.set(id, game);

    const displayBoard = `
🎮 *Tic Tac Toe*
${board[0]} | ${board[1]} | ${board[2]}
${board[3]} | ${board[4]} | ${board[5]}
${board[6]} | ${board[7]} | ${board[8]}
    
🔄 *Turn:* @${game.players[game.turn].split("@")[0]}
Use: $place <1-9>`;

    sock.sendMessage(m.chat, {
      text: displayBoard,
      mentions: [m.sender, mention],
    });
  },
};
