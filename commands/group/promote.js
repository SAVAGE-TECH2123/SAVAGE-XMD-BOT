module.exports = {
  name: "promote",
  description: "Promote tagged user(s) to group admin",
  usage: "$promote @user",
  category: "Group",
  adminonly: true,
  groupOnly: true,

  execute: async function ({ m, sock, isAdmin, isBotAdmin, reply }) {
    const groupId = m.chat;
    const mentioned = m.mentionedJid;

    if (!isAdmin) return reply("❌ Only *group admins* can use this command.");
    if (!isBotAdmin) return reply("❌ I must be *admin* to promote someone.");
    if (!mentioned || mentioned.length === 0) return reply("🔖 Tag the user(s) you want to promote.\nExample: `$promote @user`");

    for (let user of mentioned) {
      await sock.groupParticipantsUpdate(groupId, [user], "promote").catch(() => {
        reply(`⚠️ Failed to promote @${user.split("@")[0]}`);
      });
    }

    reply("✅ User(s) promoted.");
  }
};
