module.exports = {
  name: "say",
  alias: ["repeat", "echo"],
  category: "Fun",
  desc: "The bot will say what you say",
  use: "$say <text>",
  async execute({ args, reply }) {
    const text = args.join(" ");
    if (!text) return reply("🗣️ Please provide text to repeat. Example: $say I love SAVAGE-XMD!");

    reply(text);
  },
};
