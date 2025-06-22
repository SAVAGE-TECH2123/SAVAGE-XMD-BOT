// commands/menu/funmenu.js

module.exports = async (sock, message, args) => {
  const funMenu = `
╔══🎉〘 *SAVAGE-XMD FUN MENU* 〙🎉══
║
╠➤ $joke — Random joke
╠➤ $meme — Fresh meme
╠➤ $truth — Truth game
╠➤ $dare — Dare game
╠➤ $rate @user — Rate someone
╠➤ $gayrate @user — Funny gay %
╠➤ $ship @user1 @user2 — Love match
║
╚═════〘 STAY SAVAGE 😈 〙═════╝
`;

  await sock.sendMessage(message.key.remoteJid, { text: funMenu }, { quoted: message });
};
