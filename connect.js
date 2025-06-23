// index.js
require('dotenv').config();
const connectToWhatsApp = require('./connect');

connectToWhatsApp()
  .then(() => console.log('✅ SAVAGE-XMD bot started'))
  .catch((err) => console.error('❌ Error starting bot:', err));
