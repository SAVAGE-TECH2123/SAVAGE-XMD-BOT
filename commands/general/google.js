const axios = require("axios");

module.exports = {
  name: "google",
  alias: ["search", "gsearch"],
  category: "General",
  desc: "Search Google and return top results",
  use: "$google <query>",
  async execute({ args, reply }) {
    if (!args.length) return reply("🔍 Please provide a search query.\n\nExample: $google how to deploy whatsapp bot");

    const query = args.join(" ");
    try {
      const res = await axios.get(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);
      const results = res.data.RelatedTopics;

      if (!results || results.length === 0) return reply("❌ No results found.");

      let msg = `🔎 *Google Search Results for:* _${query}_\n\n`;
      let count = 0;

      for (const item of results) {
        if (item.Text && item.FirstURL && count < 5) {
          msg += `• *${item.Text}*\n🌐 ${item.FirstURL}\n\n`;
          count++;
        }
      }

      reply(msg.trim());
    } catch (err) {
      console.error(err);
      reply("❌ Error fetching results. Try again later.");
    }
  }
};
