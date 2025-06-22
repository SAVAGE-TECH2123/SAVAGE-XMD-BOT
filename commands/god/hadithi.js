module.exports = {
  name: "hadithi",
  alias: ["hadith", "prophetwords"],
  category: "God",
  desc: "Send a Hadith from the Prophet Muhammad ﷺ",
  use: "$hadithi",
  async execute({ reply }) {
    const hadiths = [
      "📜 *The Prophet ﷺ said:*\n'Whoever believes in Allah and the Last Day, let him speak good or remain silent.' — Bukhari & Muslim",
      "🕋 *The Prophet ﷺ said:*\n'Smiling in the face of your brother is charity.' — Tirmidhi",
      "🕊️ *The Prophet ﷺ said:*\n'Allah does not look at your appearance or wealth but at your hearts and actions.' — Muslim",
      "💧 *The Prophet ﷺ said:*\n'The best among you are those who have the best manners and character.' — Bukhari",
      "🌙 *The Prophet ﷺ said:*\n'Whoever is not merciful to people, Allah will not be merciful to him.' — Bukhari"
    ];

    const randomHadith = hadiths[Math.floor(Math.random() * hadiths.length)];
    reply(randomHadith);
  }
};
