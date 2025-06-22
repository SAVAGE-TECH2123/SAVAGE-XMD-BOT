module.exports = {
  name: "rps",
  alias: ["rockpaperscissors"],
  category: "Games",
  desc: "Play Rock Paper Scissors with the bot",
  use: "$rps <rock|paper|scissors>",
  async execute({ args, reply }) {
    const user = args[0]?.toLowerCase();
    const choices = ["rock", "paper", "scissors"];

    if (!choices.includes(user)) {
      return reply("❓ Invalid choice.\nUsage: $rps rock | paper | scissors");
    }

    const bot = choices[Math.floor(Math.random() * 3)];

    let result;
    if (user === bot) {
      result = "🤝 It's a tie!";
    } else if (
      (user === "rock" && bot === "scissors") ||
      (user === "paper" && bot === "rock") ||
      (user === "scissors" && bot === "paper")
    ) {
      result = "🎉 You win!";
    } else {
      result = "😢 You lose!";
    }

    reply(`🎮 *RPS Game*\nYou: ${user}\nBot: ${bot}\n\n${result}`);
  }
};
