const axios = require("axios");

module.exports = {
  name: "joke",
  alias: ["funny", "randomjoke"],
  category: "Fun",
  desc: "Sends a random joke",
  use: "$joke",
  async execute({ reply }) {
    try {
      const res = await axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode&type=single");
      if (res.data && res.data.joke) {
        reply(`🤣 *Here's a joke:*\n\n${res.data.joke}`);
      } else {
        reply("😅 Couldn't find a joke right now. Try again later.");
      }
    } catch (err) {
      reply("❌ Error fetching joke.");
    }
  },
};
