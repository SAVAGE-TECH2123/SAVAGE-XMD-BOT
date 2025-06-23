// connect.js
const makeWASocket = require('@whiskeysockets/baileys').default;
const {
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
} = require('@whiskeysockets/baileys');
const eventHandler = require('./handlers/eventHandler');

async function connectBot() {
  const SESSION_ID = process.env.SESSION_ID || 'default_session';
  const sessionPath = `sessions/${SESSION_ID}`;
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

  const { version } = await fetchLatestBaileysVersion();
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    version,
    browser: ['SAVAGE-XMD', 'Safari', '1.0.0'],
  });

  eventHandler(sock);
  sock.ev.on('creds.update', saveCreds);
}

module.exports = connectBot;
