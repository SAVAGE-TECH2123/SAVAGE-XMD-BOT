// commands/menu/newsmenu.js

module.exports = async (sock, message, args) => {
  const newsMenu = `
╔══📰〘 *SAVAGE-XMD NEWS MENU* 〙📰══
║
╠➤ $footballnews — Latest football headlines
╠➤ $transfernews — Player transfers & updates
╠➤ $matchtoday — Today’s matches
╠➤ $matchresults — Latest scores
╠➤ $worldnews — General world headlines
╠➤ $technews — Tech & innovation news
║
╚═════〘 POWERED BY NEWS API ⚽ 〙═════╝
`;

  await sock.sendMessage(message.key.remoteJid, { text: newsMenu }, { quoted: message });
};
