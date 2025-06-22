module.exports = {
  name: "coinflip",
  alias: ["flip", "headsortails"],
  category: "Games",
  desc: "Flip a coin — heads or tails",
  use: "$coinflip",
  async execute({ reply }) {
    const sides = ["🪙 Heads", "🪙 Tails"];
    const result = sides[Math.floor(Math.random() * sides.length)];
    reply(`🔮 *Flipping the coin...*\n\nResult: ${result}`);
  },
};
