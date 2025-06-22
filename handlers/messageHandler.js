// handlers/messageHandler.js
const path = require('path');
const fs = require('fs');

const prefix = '$'; // You can later load this from config.js

module.exports = async (sock, msg) => {
  try {
    const message = msg.messages[0];
    if (!message || message.key.fromMe) return;

    const from = message.key.remoteJid;
    const type = Object.keys(message.message)[0];
    const body = message.message.conversation || message.message[type]?.text || '';

    if (!body.startsWith(prefix)) return;

    const args = body.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Look through command folders
    const commandDirs = ['ai', 'group', 'download', 'fun', 'menu', 'news'];

    for (const dir of commandDirs) {
      const commandPath = path.join(__dirname, '..', 'commands', dir, `${command}.js`);
      if (fs.existsSync(commandPath)) {
        const runCommand = require(commandPath);
        await runCommand(sock, message, args);
        return;
      }
    }

    // Unknown command fallback
    await sock.sendMessage(from, { text: `❌ Unknown command: *${command}*` }, { quoted: message });

  } catch (err) {
    console.error('❌ Error in messageHandler:', err);
  }
};
