module.exports = {
  name: "guess",
  alias: ["guessnumber", "gnum"],
  category: "Games",
  desc: "Guess the number between 1 and 10",
  use: "$guess <number>",
  async execute({ args, reply }) {
    const userGuess = parseInt(args[0]);
    const correct = Math.floor(Math.random() * 10) + 1;

    if (!userGuess || userGuess < 1 || userGuess > 10) {
      return reply("❓ Please guess a number between 1 and 10. Example: $guess 7");
    }

    if (userGuess === correct) {
      reply(`🎯 You guessed: ${userGuess}\n✅ Correct! The number was ${correct}.`);
    } else {
      reply(`🎯 You guessed: ${userGuess}\n❌ Wrong! The correct number was ${correct}.`);
    }
  }
};
