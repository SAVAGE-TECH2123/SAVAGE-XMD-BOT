const axios = require("axios");

module.exports = {
  name: "popups",
  alias: ["trending", "viralnews", "buzz"],
  category: "News",
  desc: "Get trending or viral pop culture news",
  use: "$popups",
  async execute({ reply }) {
    try {
      const res = await axios.get(`https://newsapi.org/v2/everything?q=trending&language=en&sortBy=popularity&pageSize=5&apiKey=02bf040852ed4d3080d766b2b0f3602a`);
      const articles = res.data.articles;

      let news = "🔥 *Trending Pop Culture & Viral News:*\n\n";
      articles.forEach((a, i) => {
        news += `${i + 1}. *${a.title}*\n🌐 ${a.url}\n\n`;
      });

      reply(news.trim());
    } catch (err) {
      console.error(err);
      reply("❌ Couldn’t fetch trending news. Try again later.");
    }
  }
};
