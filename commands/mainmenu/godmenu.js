// commands/menu/godmenu.js

module.exports = async (sock, message, args) => {
  const godMenu = `
╔══✝️〘 *SAVAGE-XMD GOD IS FIRST MENU* 〙✝️══
║
╠➤ $verse — Get a random Bible verse
╠➤ $quran — Get a random Quran verse
╠➤ $prayforme — Let the bot pray for you 🤲
╠➤ $wisdom — Daily motivation & wisdom
╠➤ $godquotes — Uplifting spiritual quotes
║
╚═════〘 STAY BLESSED 🙌 〙═════╝
`;

  await sock.sendMessage(message.key.remoteJid, { text: godMenu }, { quoted: message });
};
