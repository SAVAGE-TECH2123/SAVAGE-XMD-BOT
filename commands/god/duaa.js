module.exports = {
  name: "duaa",
  alias: ["dua", "supplication"],
  category: "God",
  desc: "Send a short Islamic supplication (duaa)",
  use: "$duaa",
  async execute({ reply }) {
    const duaas = [
      "🤲 *اللّهُـمَّ اجعلني من التوابين، واجعلني من المتطهرين*\nO Allah, make me among those who repent and purify themselves.",
      "🕋 *رَّبِّ ٱغْفِرْ لِي وَلِوَالِدَيَّ وَٱرْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا* — Surah Al-Isra 17:24\nMy Lord, forgive me and my parents and have mercy upon them as they brought me up when I was small.",
      "🌙 *اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ*\nO Allah, I ask You for well-being in this world and the Hereafter.",
      "💡 *اللهم اجعل القُرآنَ رَبِيعَ قلوبِنا ونُورَ صُدورِنا*\nO Allah, make the Qur'an the spring of our hearts and the light of our chests.",
      "🕊️ *اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي*\nO Allah, guide me and make me firm in following the truth."
    ];

    const duaa = duaas[Math.floor(Math.random() * duaas.length)];
    reply(duaa);
  }
};
