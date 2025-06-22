module.exports = {
  name: "devotion",
  alias: ["devotional", "dailydevotion"],
  category: "God",
  desc: "Send a devotional or daily spiritual message",
  use: "$devotion",
  async execute({ reply }) {
    const devotions = [
      "🕊️ *Devotion:*\nStart your day with faith, and your steps will follow peace. — *Proverbs 3:5-6*",
      "🙏 *Reminder:*\nYou were created with a purpose. God’s plan is always greater than your fears.",
      "📖 *Today's Devotion:*\nBe kind to others, forgive quickly, and love deeply. That’s how God loves you.",
      "☪️ *Inspiration:*\n‘Indeed, Allah is with the patient.’ — *Quran 2:153*",
      "✝️ *Faith Boost:*\n‘For I know the plans I have for you,’ declares the Lord. — *Jeremiah 29:11*"
    ];

    const pick = devotions[Math.floor(Math.random() * devotions.length)];
    reply(pick);
  }
};
