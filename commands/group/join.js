const { extractGroupCode } = require("../../lib/utils"); // optional helper if you use one

module.exports = {
  name: "join",
  description: "Join a group via invite link",
  usage: "$join <group-link>",
  category: "Group",
  adminonly: true, // Optional: restrict to bot admin
  groupOnly: false,

  execute: async function ({ m, sock, args, reply }) {
    let link = args[0];

    if (!link || !link.startsWith("https://chat.whatsapp.com/")) {
      return reply("❌ Please provide a valid WhatsApp group invite link.\nExample:\n$join https://chat.whatsapp.com/AbC123Example");
    }

    let code = link.split("https://chat.whatsapp.com/")[1].trim();
    try {
      await sock.groupAcceptInvite(code);
      reply("✅ Successfully joined the group.");
    } catch (err) {
      console.error("Join error:", err);
      reply("❌ Failed to join group. Please make sure the link is correct and valid.");
    }
  }
};
