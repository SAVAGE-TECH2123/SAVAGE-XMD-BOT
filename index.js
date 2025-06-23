const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const pino = require('pino');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const messageHandler = require('./handlers/messageHandler');

const SESSION_ID = process.env.SESSION_ID || 'default_session_id';
const SESSION_FILE_PATH = path.join(__dirname, `${SESSION_ID}.json`);
const { state, saveState } = useSingleFileAuthState(SESSION_FILE_PATH);

async function startBot() {
  const sock = makeWASocket({
    logger: pino({ level: 'silent' }),
    auth: state,
    printQRInTerminal: false,
    browser: ['SAVAGE-XMD', 'Chrome', '1.0.0']
  });

  // Auto-save session on updates
  sock.ev.on('creds.update', saveState);

  // Handle incoming messages
  sock.ev.on('messages.upsert', async (m) => {
    try {
      await messageHandler(sock, m);
    } catch (err) {
      console.error('❌ Error handling message:', err);
    }
  });

  console.log('✅ SAVAGE-XMD is up and running using session ID:', SESSION_ID);
}

startBot();
