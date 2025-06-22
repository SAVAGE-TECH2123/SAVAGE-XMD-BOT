module.exports = {
  name: "quote",
  alias: ["inspire", "motivate"],
  category: "General",
  desc: "Send a random inspirational quote",
  use: "$quote",
  async execute({ reply }) {
    const quotes = [
      "🌟 *Believe you can and you're halfway there.* — Theodore Roosevelt",
      "💡 *Success is not final, failure is not fatal: It is the courage to continue that counts.* — Winston Churchill",
      "🔥 *Push yourself, because no one else is going to do it for you.*",
      "🧠 *The mind is everything. What you think, you become.* — Buddha",
      "⚡ *Your limitation—it's only your imagination.*"
    ];

    const pick = quotes[Math.floor(Math.random() * quotes.length)];
    reply(pick);
  }
};
