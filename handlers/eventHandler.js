// handlers/eventHandler.js
module.exports = async (sock) => {
  // Log connection updates
  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== 401;
      console.log('Connection closed. Reconnecting...', shouldReconnect);
      if (shouldReconnect) {
        require('../index')(); // Restart bot if not logged out
      }
    } else if (connection === 'open') {
      console.log('✅ SAVAGE-XMD is now connected and running!');
    }
  });

  // Listen to messages and route to message handler
  sock.ev.on('messages.upsert', async (msg) => {
    try {
      const messageHandler = require('./messageHandler');
      await messageHandler(sock, msg);
    } catch (err) {
      console.error('⚠️ Error in eventHandler (message):', err);
    }
  });
};
