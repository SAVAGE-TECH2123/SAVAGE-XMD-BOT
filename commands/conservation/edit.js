module.exports = {
  name: "edit",
  alias: ["revise", "update"],
  category: "Conservation",
  desc: "Edit a message sent by the bot",
  use: "$edit <new message> (reply to bot's message)",
  async execute({ m, args, sock, isCreator }) {
    if (!m.quoted) return m.reply("📝 Please reply to a message sent by me that you want to edit.");
    if (!args.length) return m.reply("✍️ Please provide the new message content.");

    const newMsg = args.join(" ");
    const quoted = m.quoted;

    // Only allow editing messages sent by the bot itself
    if (!quoted.fromMe) return m.reply("❌ I can only edit messages that I sent.");

    try {
      await sock.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: true,
          id: quoted.id,
          participant: m.sender
        }
      });

      await sock.sendMessage(m.chat, { text: newMsg }, { quoted: m });
    } catch (err) {
      console.error(err);
      m.reply("❌ Failed to edit message.");
    }
  }
};
