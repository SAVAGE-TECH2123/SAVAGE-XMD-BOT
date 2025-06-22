const axios = require("axios");

module.exports = {
  name: "short",
  alias: ["shortlink", "tiny"],
  category: "Extra",
  desc: "Shorten a long URL using TinyURL",
  use: "$short <link>",
  async execute({ args, reply }) {
    const url = args[0];
    if (!url || !url.startsWith("http")) {
      return reply("❗ Please provide a valid link.\nExample: $short https://example.com");
    }

    try {
      const res = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
      reply(`🔗 *Shortened Link:*\n${res.data}`);
    } catch (err) {
      console.error(err);
      reply("❌ Failed to shorten the link. Try again later.");
    }
  }
};
