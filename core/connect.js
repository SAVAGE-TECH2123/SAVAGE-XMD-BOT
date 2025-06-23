// core/connect.js

const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState('./session'); // session folder

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    browser: ['SAVAGE-XMD', 'Chrome', '1.0.0']
  });

  sock.ev.on('creds.update', saveCreds); // Save updated session

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      console.log('🛑 Connection closed:', lastDisconnect?.error?.message);
    } else if (connection === 'open') {
      console.log('✅ Connected to WhatsApp');
    }
  });

  return sock;
}

module.exports = connectToWhatsApp;
