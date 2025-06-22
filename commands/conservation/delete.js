module.exports = {
  name: "delete",
  alias: ["del", "remove"],
  category: "Conservation",
  desc: "Delete a message by replying to it",
  use: "$delete (reply to the message)",
  async execute({ m, sock, isBotAdmin }) {
    if (!m.quoted) return m.reply("⚠️ Please reply to the message you want to delete.");
    if (!isBotAdmin) return m.reply("❌ I need admin rights to delete messages in this group.");

    try {
      await sock.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.quoted.id,
          participant: m.quoted.sender
        }
      });
    } catch (err) {
      console.error(err);
      m.reply("❌ Failed to delete message.");
    }
  }
};
