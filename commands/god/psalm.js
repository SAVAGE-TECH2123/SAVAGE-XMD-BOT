module.exports = {
  name: "psalm",
  alias: ["ps", "psalms"],
  category: "God",
  desc: "Get a Psalm by number",
  use: "$psalm <number>",
  async execute({ args, reply }) {
    const psalms = {
      23: "✝️ *Psalm 23:*\nThe Lord is my shepherd; I shall not want...",
      91: "🛡️ *Psalm 91:*\nHe who dwells in the secret place of the Most High shall abide under the shadow of the Almighty.",
      27: "🕊️ *Psalm 27:*\nThe Lord is my light and my salvation — whom shall I fear?",
      121: "⛰️ *Psalm 121:*\nI lift up my eyes to the hills — where does my help come from? My help comes from the Lord...",
      46: "💪 *Psalm 46:*\nGod is our refuge and strength, a very present help in trouble.",
    };

    const num = parseInt(args[0]);
    if (!num) return reply("❗Please provide a psalm number. Example: `$psalm 23`");

    const verse = psalms[num];
    if (!verse) return reply("❌ Psalm not found in list. Available: 23, 27, 46, 91, 121");

    reply(verse);
  }
};
