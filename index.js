// index.js
const connectToWhatsApp = require('./core/connect');
const messageHandler = require('./handlers/messageHandler');

async function startBot() {
  try {
    const sock = await connectToWhatsApp();

    sock.ev.on('messages.upsert', async (msg) => {
      await messageHandler(sock, msg);
    });

    console.log('✅ SAVAGE-XMD is now online!');
  } catch (err) {
    console.error('❌ Bot startup failed:', err);
  }
}

startBot();
