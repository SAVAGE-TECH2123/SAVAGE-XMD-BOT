const fs = require("fs");

module.exports = {
  name: "fasttype",
  alias: ["ft", "speedtype"],
  category: "Games",
  desc: "Speed typing challenge",
  use: "$fasttype",
  async execute({ m, sock }) {
    const words = [
      "savage", "whatsapp", "bot", "challenge", "keyboard",
      "elephant", "banana", "javascript", "moonlight", "velocity"
    ];

    const chosen = words[Math.floor(Math.random() * words.length)];
    await sock.sendMessage(m.chat, {
      text: `⌛ *Fast Type Challenge!*\nWhoever types this first wins:\n\n📝 *${chosen}*`,
    });

    const collector = sock.ev.on("messages.upsert", async (msg) => {
      try {
        const message = msg.messages[0];
        const body = message.message?.conversation || message.message?.extendedTextMessage?.text || "";
        if (body?.toLowerCase() === chosen.toLowerCase()) {
          sock.ev.off("messages.upsert", collector);
          await sock.sendMessage(m.chat, {
            text: `🎉 *Winner:* @${message.key.participant || message.key.remoteJid.split("@")[0]}\n✅ Correctly typed: *${chosen}*`,
            mentions: [message.key.participant || message.key.remoteJid],
          });
        }
      } catch (e) {
        console.error("Fasttype error:", e);
      }
    });

    // Timeout after 30 seconds
    setTimeout(() => {
      sock.ev.off("messages.upsert", collector);
      sock.sendMessage(m.chat, { text: `⏱️ Time's up! Nobody typed it correctly.\nWord was: *${chosen}*` });
    }, 30000);
  },
};
