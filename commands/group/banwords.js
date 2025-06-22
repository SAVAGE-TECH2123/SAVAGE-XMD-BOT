const fs = require("fs");
const path = require("path");

// File to save banned words and settings
const dbPath = path.join(__dirname, "../../../database/banwords.json");
let bannedDB = fs.existsSync(dbPath) ? JSON.parse(fs.readFileSync(dbPath)) : {};

module.exports = {
  name: "banwords",
  description: "Add/remove banned words or set action (delete/warn/remove)",
  usage: "$banwords add badword\n$banwords remove badword\n$banwords action delete|warn|remove\n$banwords off",
  category: "Group",
  adminonly: true,
  groupOnly: true,

  execute: async ({ m, args, isAdmin, isBotAdmin, reply }) => {
    const groupId = m.chat;

    if (!isAdmin) return reply("⛔ Only *group admins* can use this command.");
    if (!isBotAdmin) return reply("🤖 I must be *admin* to manage group rules.");

    const sub = args[0]?.toLowerCase();
    const word = args.slice(1).join(" ")?.toLowerCase();

    bannedDB[groupId] = bannedDB[groupId] || { words: [], action: "warn" };

    if (sub === "add") {
      if (!word) return reply("⚠️ Please provide a word to ban.");
      if (!bannedDB[groupId].words.includes(word)) bannedDB[groupId].words.push(word);
      fs.writeFileSync(dbPath, JSON.stringify(bannedDB, null, 2));
      return reply(`✅ Added *${word}* to banned words.`);
    }

    if (sub === "remove") {
      if (!word) return reply("⚠️ Please provide a word to remove.");
      bannedDB[groupId].words = bannedDB[groupId].words.filter(w => w !== word);
      fs.writeFileSync(dbPath, JSON.stringify(bannedDB, null, 2));
      return reply(`❌ Removed *${word}* from banned words.`);
    }

    if (sub === "action") {
      if (!["warn", "delete", "remove"].includes(word)) {
        return reply("❗ Invalid action. Choose: warn | delete | remove");
      }
      bannedDB[groupId].action = word;
      fs.writeFileSync(dbPath, JSON.stringify(bannedDB, null, 2));
      return reply(`✅ Action set to *${word.toUpperCase()}* when banned words are detected.`);
    }

    if (sub === "off") {
      delete bannedDB[groupId];
      fs.writeFileSync(dbPath, JSON.stringify(bannedDB, null, 2));
      return reply("❎ Banned word protection *disabled*.");
    }

    return reply(`📌 Usage:
- $banwords add badword
- $banwords remove badword
- $banwords action delete|warn|remove
- $banwords off`);
  },

  onMessage: async ({ m, sock, participants }) => {
    const groupId = m.chat;
    if (!m.isGroup || !bannedDB[groupId]) return;

    const banned = bannedDB[groupId];
    const message = m.body?.toLowerCase();

    if (!message) return;

    const matched = banned.words.find(word => message.includes(word));
    if (!matched) return;

    const senderId = m.sender;
    const sender = participants.find(p => p.id === senderId);
    const isAdmin = sender?.admin;

    if (isAdmin) return; // don't punish admins

    if (banned.action === "warn") {
      return sock.sendMessage(groupId, {
        text: `⚠️ Warning @${senderId.split("@")[0]}! You used a banned word: *${matched}*`,
        mentions: [senderId]
      });
    }

    if (banned.action === "delete") {
      await sock.sendMessage(groupId, { delete: m.key });
      return sock.sendMessage(groupId, {
        text: `❌ Message deleted! @${senderId.split("@")[0]} used a banned word.`,
        mentions: [senderId]
      });
    }

    if (banned.action === "remove") {
      await sock.sendMessage(groupId, {
        text: `⛔ @${senderId.split("@")[0]} removed for using banned word.`,
        mentions: [senderId]
      });
      await sock.groupParticipantsUpdate(groupId, [senderId], "remove").catch(() => {
        sock.sendMessage(groupId, { text: "❌ Failed to remove user. Check admin rights." });
      });
    }
  },
};
