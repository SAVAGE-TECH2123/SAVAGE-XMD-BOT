module.exports = {
  name: "pray",
  alias: ["prayer", "prayertime"],
  category: "God",
  desc: "Get a short prayer or inspirational message",
  use: "$pray",
  async execute({ reply }) {
    const prayers = [
      "🙏 *Lord, guide me in Your truth, and teach me, for You are my God, my Savior, and my hope is in You all day long.*",
      "☪️ *Allah, guide us to the straight path. Give us strength and mercy in our trials.*",
      "✝️ *Heavenly Father, grant me peace in my heart and clarity in my mind as I face each day. Amen.*",
      "🕊️ *God, help me to walk in Your light and trust in Your plan for my life.*",
      "💡 *Lord, fill my heart with Your love and peace, that I may share it with others.*"
    ];

    const randomPrayer = prayers[Math.floor(Math.random() * prayers.length)];
    reply(randomPrayer);
  }
};
