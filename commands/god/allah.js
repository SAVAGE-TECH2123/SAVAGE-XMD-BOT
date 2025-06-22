module.exports = {
  name: "allah",
  alias: ["arrahman", "allahquote"],
  category: "God",
  desc: "Send a quote about Allah ﷻ",
  use: "$allah",
  async execute({ reply }) {
    const quotes = [
      "☪️ *Indeed, Allah is with those who are patient.* — Surah Al-Baqarah 2:153",
      "🕋 *And rely upon Allah; and sufficient is Allah as Disposer of affairs.* — Quran 33:3",
      "🕊️ *So remember Me; I will remember you.* — Quran 2:152",
      "💡 *He is Allah, the One and Only.* — Surah Al-Ikhlas 112:1",
      "🌙 *Verily, in the remembrance of Allah do hearts find rest.* — Quran 13:28"
    ];

    const pick = quotes[Math.floor(Math.random() * quotes.length)];
    reply(pick);
  }
};
