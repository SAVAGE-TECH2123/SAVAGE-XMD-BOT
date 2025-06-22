const fs = require("fs");
const path = require("path");

// Path for saving anti-bot settings
const dbPath = path.join(__dirname, "../../../database/antibot.json");
let antibotDB = fs.existsSync(dbPath) ? JSON.parse(fs.readFileSync(dbPath)) : {};

module.exports = {
  name: "antibot",
  description: "Set anti-bot action: delete, warn, remove or turn off.",
  usage: "$antibot action <delete|warn|remove> or $antibot off",
  category: "Group",
  adminonly: true,
  groupOnly: true,

  execute: async function ({ m, args, groupMetadata, isAdmin, isBotAdmin, reply }) {
    const groupId = m.chat;
    if (!isAdmin) return reply("❌ Only *admins* can use this command.");
    if (!isBotAdmin) return reply("❌ I must be *admin* to manage group rules.");

    const sub = args[0]?.toLowerCase();
    const action = args[1]?.toLowerCase();

    if (sub === "action" && ["delete", "warn", "remove"].includes(action)) {
      antibotDB[groupId] = { enabled: true, action };
      fs.writeFileSync(dbPath, JSON.stringify(antibotDB, null, 2));
      return reply(`✅ Anti-bot action set to *${action.toUpperCase()}*`);
    }

    if (sub === "off") {
      delete antibotDB[groupId];
      fs.writeFileSync(dbPath, JSON.stringify(antibotDB, null, 2));
      return reply("❌ Anti-bot disabled for this group.");
    }

    return reply(`📘 Usage:\n• $antibot action delete\n• $antibot action warn\n• $antibot action remove\n• $antibot off`);
  },

  onJoin: async function (m, sock) {
    const groupId = m.id;
    if (!antibotDB[groupId]?.enabled) return;

    const config = antibotDB[groupId];
    const participants = m.participants || [];

    for (const user of participants) {
      const isBot = user.startsWith("1") || user.includes(":bot"); // Adjust for your platform
      if (!isBot) continue;

      const senderId = user;
      if (config.action === "delete") {
        await sock.sendMessage(groupId, { delete: { remoteJid: groupId, fromMe: false, id: m.key.id, participant: senderId } });
        await sock.sendMessage(groupId, { text: `⚠️ Bot joined! Message deleted.`, mentions: [senderId] });
      } else if (config.action === "warn") {
        await sock.sendMessage(groupId, { text: `⚠️ Warning! @${senderId.split("@")[0]} is a bot.`, mentions: [senderId] });
      } else if (config.action === "remove") {
        await sock.sendMessage(groupId, { text: `🚫 Removing bot @${senderId.split("@")[0]}`, mentions: [senderId] });
        await sock.groupParticipantsUpdate(groupId, [senderId], "remove").catch(() => {
          sock.sendMessage(groupId, { text: `❌ Failed to remove @${senderId.split("@")[0]}.`, mentions: [senderId] });
        });
      }
    }
  }
};
