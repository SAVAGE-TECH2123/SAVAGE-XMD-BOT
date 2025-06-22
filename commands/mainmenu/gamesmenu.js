module.exports = {
  name: "gamesmenu",
  alias: ["games", "gm"],
  category: "Main",
  desc: "Displays a list of available game commands",
  use: "$gamesmenu",
  async execute({ reply }) {
    reply(`🎮 *GAMES MENU* 🎮

🪙 $coinflip – Flip a coin (heads or tails)
🎯 $guess <1-10> – Guess the bot's number
🤖 $rps <rock|paper|scissors> – Play Rock Paper Scissors
⌨️ $fasttype – Who types the word fastest?
❌ $tictactoe @user – Start Tic Tac Toe
🧩 $place <1-9> – Place your move in a Tic Tac Toe game
`);
  }
};
