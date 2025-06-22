// commands/menu/botmenu.js

module.exports = async (sock, message, args) => {
  const botInfo = `
╔══🤖〘 *SAVAGE-XMD BOT INFO* 〙🤖══
║
╠➤ $ping — Check bot speed
╠➤ $owner — Contact the developer
╠➤ $runtime — How long bot is active
╠➤ $support — Get support group
╠➤ $prefix — Current bot prefix
╠➤ $report <text> — Report a bug
║
╠🔧 *Bot Name:* SAVAGE-XMD
╠🧠 *Creator:* @SAVAGE_B.O.Y
╠🌐 *Session:* Paired (Auto)
║
╚═════〘 STAY CONNECTED ⚡ 〙═════╝
`;

  await sock.sendMessage(message.key.remoteJid, { text: botInfo }, { quoted: message });
};
