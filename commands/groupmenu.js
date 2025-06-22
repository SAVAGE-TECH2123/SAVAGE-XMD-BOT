// commands/menu/groupmenu.js

module.exports = async (sock, message, args) => {
  const groupMenu = `
╔══👥〘 *SAVAGE-XMD GROUP MENU* 〙👥══
║
╠➤ $tagall — Mention all group members
║   🔹 Admin only
║
╠➤ $antilink on/off — Block group links
║   🔹 Auto-delete link messages
║   🔹 Warn or kick after repeat
║
╠➤ $antibot on/off — Block other WhatsApp bots
║   🔹 Detect & auto-remove bots
║
╠➤ $bannedwords <word> — Add word to censor list
╠➤ $unbanword <word> — Remove word from banned list
╠➤ $listbanwords — Show banned words
║   🔹 Auto-delete messages
║   🔹 Warn or remove repeat offenders
║
╠➤ $kick @user — Remove user
╠➤ $add <number> — Add member to group
╠➤ $promote @user — Give admin
╠➤ $demote @user — Remove admin
║
╠➤ $group open — Allow members to chat
╠➤ $group close — Only admins can chat
╠➤ $leave — Bot exits group
║
╚═════〘 SECURE YOUR GROUP 🔐 〙═════╝
`;

  await sock.sendMessage(message.key.remoteJid, { text: groupMenu }, { quoted: message });
};
