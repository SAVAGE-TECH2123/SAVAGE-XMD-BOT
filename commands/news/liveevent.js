const axios = require("axios");

module.exports = {
  name: "liveevents",
  alias: ["live", "breaking", "trendingnews"],
  category: "News",
  desc: "Get live trending or breaking news events",
  use: "$liveevents",
  async execute({ reply }) {
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?language=en&sortBy=publishedAt&pageSize=5&apiKey=02bf040852ed4d3080d766b2b0f3602a`);
      const articles = res.data.articles;

      let news = "🔴 *Live & Breaking Events:*\n\n";
      articles.forEach((a, i) => {
        news += `${i + 1}. *${a.title}*\n🌐 ${a.url}\n\n`;
      });

      reply(news.trim());
    } catch (err) {
      console.error(err);
      reply("❌ Unable to fetch live events at the moment
