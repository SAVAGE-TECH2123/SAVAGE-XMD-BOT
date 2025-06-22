const axios = require("axios");

module.exports = {
  name: "meme",
  alias: ["memes", "funmeme"],
  category: "Fun",
  desc: "Sends a random meme from Reddit",
  use: "$meme",
  async execute({ m, reply }) {
    try {
      const res = await axios.get("https://meme-api.com/gimme");
      const meme = res.data;

      await m.sendMessage(m.chat, {
        image: { url: meme.url },
        caption: `🤣 *${meme.title}*\n🔗 ${meme.postLink}\n👍 ${meme.ups} upvotes\n📄 From: r/${meme.subreddit}`
      }, { quoted: m });

    } catch (err) {
      console.error("Meme fetch error:", err.message);
      reply("❌ Failed to fetch meme. Try again later.");
    }
  },
};
