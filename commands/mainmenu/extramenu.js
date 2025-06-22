// commands/menu/extramenu.js

module.exports = async (sock, message, args) => {
  const extraMenu = `
╔══🧰〘 *SAVAGE-XMD EXTRAS MENU* 〙🧰══
║
╠➤ $ping — Check bot response time
╠➤ $owner — Get owner's contact
╠➤ $runtime — Bot online duration
╠➤ $support — Support group or link
╠➤ $report <issue> — Report bugs or errors
╠➤ $invite <group link> — Request bot to join group
╠➤ $botname — Show current bot name
╠➤ $donate — Support development 💰
║
╚═════〘 POWERED BY SAVAGE B.O.Y 🔧 〙═════╝
`;

  await sock.sendMessage(message.key.remoteJid, { text: extraMenu }, { quoted: message });
};
