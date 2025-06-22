module.exports = {
  name: "truth",
  alias: ["t"],
  category: "Fun",
  desc: "Gives a random truth question",
  use: "$truth",
  async execute({ reply }) {
    const truths = [
      "What's the most embarrassing thing you've ever done?",
      "Have you ever lied to your best friend?",
      "What's a secret you never told anyone?",
      "Who was your first crush?",
      "What’s something you’re glad your parents don’t know about you?",
      "Have you ever cheated on a test?",
      "Have you ever stalked someone on social media?",
      "What’s your biggest fear?",
      "What's something weird you do when you’re alone?",
      "What's the most childish thing you still do?"
    ];

    const random = truths[Math.floor(Math.random() * truths.length)];
    reply(`🗣 *Truth:* ${random}`);
  }
};
