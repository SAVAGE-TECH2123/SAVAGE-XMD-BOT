// commands/menu/downloadmenu.js

module.exports = async (sock, message, args) => {
  const downloadMenu = `
╔══📥〘 *SAVAGE-XMD DOWNLOAD MENU* 〙📥══
║
╠➤ $ytmp3 <link> — YouTube to MP3
╠➤ $ytmp4 <link> — YouTube to MP4
╠➤ $tiktok <link> — TikTok downloader
╠➤ $play <song name> — Play music
╠➤ $apk <app name> — Download APK
╠➤ $img <query> — Image downloader
║
╚═════〘 DOWNLOAD FREELY 🎶 〙═════╝
`;

  await sock.sendMessage(message.key.remoteJid, { text: downloadMenu }, { quoted: message });
};
