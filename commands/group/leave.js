module.exports = {
  name: "leave",
  description: "Bot leaves the group",
  usage: "$leave",
  category: "Group",
  adminonly: true,
  groupOnly: true,

  execute: async function ({ m, sock, isAdmin, isBotAdmin, reply }) {
    const groupId = m.chat;

    if (!isAdmin) {
      return reply("❌ Only *group admins* can ask me to leave.");
    }

    if (!isBotAdmin) {
      return reply("❌ I need to be *admin* to leave the group myself.");
    }

    reply("👋 Leaving the group...");
    await sock.groupLeave(groupId).catch(err => {
      console.error("Error leaving group:", err);
      reply("❌ Failed to leave the group.");
    });
  }
};
