module.exports = {
  name: "say",
  alias: ["repeat", "echo"],
  category: "General",
  desc: "Repeats your message",
  use: "$say <text>",
  async execute({ args, reply }) {
    if (!args.length) return reply("🗣️ Please provide some text.\n\nExample: $say Hello, world!");
    const message = args.join(" ");
    reply(message);
  }
};
