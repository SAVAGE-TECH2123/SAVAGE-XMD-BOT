module.exports = {
  name: "dare",
  alias: ["d"],
  category: "Fun",
  desc: "Gives a random dare challenge",
  use: "$dare",
  async execute({ reply }) {
    const dares = [
      "Call your crush and confess your feelings. 📞❤️",
      "Text your ex and say you miss them. 😅",
      "Send a funny selfie in the group. 🤪",
      "Act like a cat for 1 minute. 🐱",
      "Sing a song loudly and send a voice note. 🎤",
      "Change your profile picture to a monkey for 1 hour. 🐒",
      "Do 10 push-ups and send proof. 💪",
      "Let the group choose your status for 24 hours. 📝",
      "Speak in emojis for the next 10 messages. 😄📱🔥👀",
      "Send your last photo from your gallery without explanation. 📸"
    ];

    const random = dares[Math.floor(Math.random() * dares.length)];
    reply(`🎯 *Dare:* ${random}`);
  }
};
