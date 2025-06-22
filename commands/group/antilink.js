const fs = require("fs");
const path = require("path");

// Path for saving anti-link settings
const dbPath = path.join(__dirname, "../../database/antilink.json");
let antilinkDB = fs.existsSync(dbPath) ? JSON.parse(fs.readFileSync(dbPath)) : {};

module.exports = {
  name: "antilink",
  description: "Set anti-link action: delete, warn, remove or turn off",
  usage: "$antilink action <delete|warn|remove> or $antilink off",
  category: "Group",
  adminOnly: true,
  groupOnly: true,

  execute: async function ({ m, args, groupMetadata, isAdmin, isBotAdmin, reply }) {
    const groupId = m.chat;
    if (!isAdmin) return reply("🛑 Only *admins* can use this command.");
    if (!isBotAdmin) return reply("🤖 I must be *admin* to manage group rules.");

    const sub = args[0]?.toLowerCase();
    const action = args[1]?.toLowerCase();

    if (sub === "action" && ["delete", "warn", "remove"].includes(action)) {
      antilinkDB[groupId] = { enabled: true, action };
      fs.writeFileSync(dbPath, JSON.stringify(antilinkDB, null, 2));
      return reply(`✅ Anti-link action set to *${action.toUpperCase()}*`);
    }

    if (sub === "off") {
      delete antilinkDB[groupId];
      fs.writeFileSync(dbPath, JSON.stringify(antilinkDB, null, 2));
      return reply("❌ Anti-link disabled for this group.");
    }

    return reply("⚙️ Usage:\n• $antilink action delete\n• $antilink action warn\n• $antilink action remove\n• $antilink off");
  },

  onMessage: async function ({ m, sock, participants }) {
    const groupId = m.chat;
    if (!m.isGroup || !antilinkDB[groupId] || !m.body) return;

    const config = antilinkDB[groupId];
    const linkRegex = /(https?:\/\/)?(chat\.whatsapp\.com|t\.me|discord\.gg|instagram\.com|facebook\.com|youtube\.com|wa\.me|bit\.ly|linktr\.ee)\/[^\s]+/i;

    if (linkRegex.test(m.body)) {
      const senderId = m.sender;
      const isSenderAdmin = participants.find(p => p.id === senderId)?.admin;

      if (isSenderAdmin) return;

      if (config.action === "delete") {
        await sock.sendMessage(groupId, { delete: m.key });
        await sock.sendMessage(groupId, { text: `⚠️ Link deleted! @${senderId.split("@")[0]}`, mentions: [senderId] });
      } else if (config.action === "warn") {
        await sock.sendMessage(groupId, { text: `🚨 *Warning!* @${senderId.split("@")[0]} – posting links is not allowed.`, mentions: [senderId] });
      } else if (config.action === "remove") {
        await sock.sendMessage(groupId, { text: `❌ @${senderId.split("@")[0]} removed for sending a link.`, mentions: [senderId] });
        await sock.groupParticipantsUpdate(groupId, [senderId], "remove").catch(() => {
          sock.sendMessage(groupId, { text: `❗ Failed to remove @${senderId.split("@")[0]} – check admin rights.`, mentions: [senderId] });
        });
      }
    }
  }
};
