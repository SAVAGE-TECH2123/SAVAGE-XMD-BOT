// index.js

// Import the connect function from connect.js
const connectToWhatsApp = require('./connect');

// Start the WhatsApp bot
connectToWhatsApp()
  .then(() => {
    console.log('🚀 SAVAGE-XMD Bot has started successfully!');
  })
  .catch((err) => {
    console.error('❌ Failed to start SAVAGE-XMD Bot:', err);
  });
