module.exports = {
  name: "demote",
  description: "Demote tagged user(s) from group admin",
  usage: "$demote @user",
  category: "Group",
  adminonly: true,
  groupOnly: true,

  execute: async function ({ m, sock, isAdmin, isBotAdmin, reply }) {
    const groupId = m.chat;
    const mentioned = m.mentionedJid;

    if (!isAdmin) return reply("❌ Only *group admins* can use this command.");
    if (!isBotAdmin) return reply("❌ I need to be *admin* to demote someone.");
    if (!mentioned || mentioned.length === 0) return reply("🔖 Tag the user(s) you want to demote.\nExample: `$demote @user`");

    for (let user of mentioned) {
      await sock.groupParticipantsUpdate(groupId, [user], "demote").catch(() => {
        reply(`⚠️ Failed to demote @${user.split("@")[0]}`);
      });
    }

    reply("✅ User(s) demoted.");
  }
};
