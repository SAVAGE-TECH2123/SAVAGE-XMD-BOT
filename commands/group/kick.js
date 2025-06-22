module.exports = {
  name: "kick",
  description: "Remove mentioned user(s) from the group",
  usage: "$kick @user",
  category: "Group",
  adminonly: true,
  groupOnly: true,

  execute: async function ({ m, sock, isAdmin, isBotAdmin, reply }) {
    const groupId = m.chat;
    const mentioned = m.mentionedJid;

    if (!isAdmin) return reply("❌ Only *group admins* can use this command.");
    if (!isBotAdmin) return reply("🤖 I need to be *admin* to kick someone.");
    if (!mentioned || mentioned.length === 0) return reply("👥 Please tag the user(s) you want to remove.\nExample: `$kick @user`");

    for (let user of mentioned) {
      if (user.endsWith("@s.whatsapp.net")) {
        await sock.groupParticipantsUpdate(groupId, [user], "remove").catch(err => {
          reply(`⚠️ Failed to remove @${user.split("@")[0]}`);
        });
      }
    }

    reply("✅ User(s) kicked (if valid and not an admin).");
  }
};
