const axios = require("axios");

module.exports = {
  name: "bible",
  alias: ["getbible", "versebible"],
  category: "God",
  desc: "Get a specific Bible verse",
  use: "$bible <book chapter:verse>",
  async execute({ args, reply }) {
    const input = args.join(" ");
    if (!input) {
      return reply("❗Please provide a book and verse. Example: $bible John 3:16");
    }

    try {
      const res = await axios.get(`https://labs.bible.org/api/?passage=${encodeURIComponent(input)}&type=json`);
      if (!res.data || res.data.length === 0) {
        return reply("❌ Verse not found. Please check your format.");
      }

      const verse = res.data[0];
      reply(`📖 *${verse.bookname} ${verse.chapter}:${verse.verse}*\n${verse.text}`);
    } catch (err) {
      console.error(err);
      reply("❌ Error fetching verse. Try again later.");
    }
  }
};
