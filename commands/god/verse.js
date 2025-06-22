const axios = require("axios");

module.exports = {
  name: "verse",
  alias: ["bibleverse", "scripture"],
  category: "God",
  desc: "Get a Bible verse by keyword or randomly",
  use: "$verse <keyword (optional)>",
  async execute({ args, reply }) {
    const query = args.join(" ");

    try {
      if (query) {
        const res = await axios.get(`https://labs.bible.org/api/?passage=${encodeURIComponent(query)}&type=json`);
        if (res.data.length < 1) return reply("❌ Verse not found. Try a different keyword or book.");
        
        const verse = res.data[0];
        reply(`📖 *${verse.bookname} ${verse.chapter}:${verse.verse}*\n${verse.text}`);
      } else {
        const res = await axios.get("https://labs.bible.org/api/?passage=random&type=json");
        const verse = res.data[0];
        reply(`📖 *${verse.bookname} ${verse.chapter}:${verse.verse}*\n${verse.text}`);
      }
    } catch (err) {
      console.error(err);
      reply("❌ Could not fetch verse. Try again later.");
    }
  }
};
