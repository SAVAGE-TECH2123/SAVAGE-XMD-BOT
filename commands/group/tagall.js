module.exports = {
  name: "tagall",
  description: "Mention all group members",
  usage: "$tagall [optional text]",
  category: "Group",
  adminonly: true,
  groupOnly: true,

  execute: async function ({ m, sock, args, participants, isAdmin, isBotAdmin, reply }) {
    const groupId = m.chat;
    if (!isAdmin) return reply("❌ Only *group admins* can use this command.");
    if (!isBotAdmin) return reply("❌ I must be *admin* to tag everyone.");

    let text = args.join(" ") || "📢 *Tagging all members:*";
    let mentions = participants.map(p => p.id);

    let tagMsg = `${text}\n\n`;
    for (let member of participants) {
      tagMsg += `➤ @${member.id.split("@")[0]}\n`;
    }

    await sock.sendMessage(groupId, {
      text: tagMsg,
      mentions,
    });
  }
};
