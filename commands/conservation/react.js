module.exports = {
  name: "react",
  alias: ["reaction", "emoji"],
  category: "Conservation",
  desc: "React to a message with an emoji",
  use: "$react 😄 (by replying to a message)",
  async execute({ m, args, sock }) {
    if (!m.quoted) return m.reply("⚠️ Please reply to a message you want to react to.");
    if (!args.length) return m.reply("😶 Please provide an emoji.\n\nExample: $react 🔥");

    const emoji = args[0];
    try {
      await sock.sendMessage(m.chat, {
        react: {
          text: emoji,
          key: m.quoted.key
        }
      });
    } catch (err) {
      console.error(err);
      m.reply("❌ Failed to react to message.");
    }
  }
};
