module.exports = {
  name: "jesus",
  alias: ["jesusquote", "lordjesus"],
  category: "God",
  desc: "Send a quote or message from Jesus",
  use: "$jesus",
  async execute({ reply }) {
    const quotes = [
      "✝️ *Jesus said:* 'I am the way, the truth, and the life. No one comes to the Father except through me.' — John 14:6",
      "🕊️ *Jesus said:* 'Love your enemies and pray for those who persecute you.' — Matthew 5:44",
      "💧 *Jesus said:* 'Let the one who is without sin cast the first stone.' — John 8:7",
      "🙏 *Jesus said:* 'Come to me, all you who are weary and burdened, and I will give you rest.' — Matthew 11:28",
      "🌟 *Jesus said:* 'With man this is impossible, but with God all things are possible.' — Matthew 19:26"
    ];

    const pick = quotes[Math.floor(Math.random() * quotes.length)];
    reply(pick);
  }
};
