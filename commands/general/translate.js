const axios = require("axios");

module.exports = {
  name: "translate",
  alias: ["tl", "tr"],
  category: "General",
  desc: "Translate text to any language",
  use: "$translate <lang_code> <text>",
  async execute({ args, reply }) {
    if (args.length < 2) {
      return reply("🌍 Usage:\n$translate <lang_code> <text>\n\nExample:\n$translate sw Hello, how are you?");
    }

    const lang = args[0];
    const text = args.slice(1).join(" ");

    try {
      const res = await axios.post("https://libretranslate.de/translate", {
        q: text,
        source: "auto",
        target: lang,
        format: "text"
      }, {
        headers: { "Content-Type": "application/json" }
      });

      reply(`🌐 *Translated to [${lang}]*:\n\n${res.data.translatedText}`);
    } catch (err) {
      console.error(err);
      reply("❌ Failed to translate. Make sure the language code is valid.");
    }
  }
};
