// commands/menu/menu.js

module.exports = async (sock, message, args) => {
  const menuText = `
╔══🤖〘 *SAVAGE-XMD MAIN MENU* 〙🤖══
║
╠📁 *AI MENU*
║   ➤ $aimenu
║
╠📁 *FUN MENU*
║   ➤ $funmenu
║
╠📁 *GROUP MENU*
║   ➤ $groupmenu
║
╠📁 *NEWS MENU*
║   ➤ $newsmenu
║
╠📁 *DOWNLOAD MENU*
║   ➤ $downloadmenu
║
╠📁 *GOD IS FIRST MENU*
║   ➤ $godmenu
║
╠📁 *BOT INFO & EXTRAS*
║   ➤ $botmenu
║   ➤ $extramenu
║
╚═════〘 SAVAGE BY SAVAGE B.O.Y 💀 〙═════╝
`;

  await sock.sendMessage(message.key.remoteJid, { text: menuText }, { quoted: message });
};
