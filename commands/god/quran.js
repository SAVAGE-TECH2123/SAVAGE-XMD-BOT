const axios = require("axios");

module.exports = {
  name: "quran",
  alias: ["alquran", "ayah"],
  category: "God",
  desc: "Get a specific Quran verse",
  use: "$quran <chapter>:<verse> (e.g. $quran 2:255)",
  async execute({ args, reply }) {
    if (!args[0] || !args[0].includes(":")) {
      return reply("❗Please provide a verse reference like this:\n$quran 2:255");
    }

    const [chapter, verse] = args[0].split(":");
    const url = `https://api.alquran.cloud/v1/ayah/${chapter}:${verse}/en.asad`;

    try {
      const res = await axios.get(url);
      const data = res.data.data;

      reply(`☪️ *Surah ${data.surah.englishName}* (${data.surah.englishNameTranslation})\n📖 *${data.numberInSurah}*\n"${data.text}"`);
    } catch (err) {
      console.error(err);
      reply("❌ Could not find the specified verse. Check your input and try again.");
    }
  }
};
