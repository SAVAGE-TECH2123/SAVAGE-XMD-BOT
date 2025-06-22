module.exports = {
  name: "blessings",
  alias: ["blessing", "bless"],
  category: "God",
  desc: "Send a spiritual blessing or message of peace",
  use: "$blessings",
  async execute({ reply }) {
    const blessings = [
      "🙌 *May God's grace follow you wherever you go today.*",
      "🕊️ *Peace be upon you and your household.*",
      "☀️ *May your day be filled with divine favor and endless joy.*",
      "✝️ *May the Lord bless you and keep you; may His face shine upon you.* — Numbers 6:24-26",
      "☪️ *May Allah grant you ease in every difficulty and bless your soul with tranquility.*",
      "💫 *Today, walk in confidence knowing you are loved, chosen, and blessed.*"
    ];

    const pick = blessings[Math.floor(Math.random() * blessings.length)];
    reply(pick);
  }
};
