const axios = require("axios");

module.exports = {
  name: "entertainment",
  alias: ["entertain", "celebs", "movies"],
  category: "News",
  desc: "Get the latest entertainment news",
  use: "$entertainment",
  async execute({ reply }) {
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?category=entertainment&language=en&pageSize=5&apiKey=02bf040852ed4d3080d766b2b0f3602a`);
      const articles = res.data.articles;

      let news = "🎬 *Latest Entertainment News:*\n\n";
      articles.forEach((a, i) => {
        news += `${i + 1}. *${a.title}*\n🌐 ${a.url}\n\n`;
      });

      reply(news.trim());
    } catch (err) {
      console.error(err);
      reply("❌ Couldn't fetch entertainment news. Please try again later.");
    }
  }
};
