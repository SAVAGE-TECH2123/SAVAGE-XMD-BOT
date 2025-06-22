module.exports = {
  name: "gospel",
  alias: ["gospels", "goodnews"],
  category: "God",
  desc: "Send a Gospel message or teaching of Christ",
  use: "$gospel",
  async execute({ reply }) {
    const gospels = [
      "✝️ *Matthew 5:14*\nYou are the light of the world. A town built on a hill cannot be hidden.",
      "🕊️ *Luke 6:31*\nDo to others as you would have them do to you.",
      "🙏 *Mark 10:27*\nWith man this is impossible, but not with God; all things are possible with God.",
      "💧 *John 7:38*\nWhoever believes in me, as Scripture has said, rivers of living water will flow from within them.",
      "🌟 *John 8:12*\nI am the light of the world. Whoever follows me will never walk in darkness."
    ];

    const pick = gospels[Math.floor(Math.random() * gospels.length)];
    reply(pick);
  }
};
