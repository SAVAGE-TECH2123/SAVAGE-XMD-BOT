// commands/aimenu.js

module.exports = async (sock, message, args) => {
  const aiMenu = `
╔══✪〘 *SAVAGE-XMD AI MENU* 〙✪══
║
╠➤ $ai <your question>
╠➤ $img <prompt> — AI Image
╠➤ $draw <idea> — AI Drawing
╠➤ $quote — Inspirational AI Quote
╠➤ $tts <text> — Text to Speech
║
╚═════〘 POWERED BY AI 〙═════╝
`;

  await sock.sendMessage(message.key.remoteJid, { text: aiMenu }, { quoted: message });
};
