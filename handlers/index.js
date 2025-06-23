const { default: makeWASocket, useSingleFileAuthState } = require("@whiskeysockets/baileys");
const P = require("pino");
const fs = require("fs");
const path = require("path");
const messageHandler = require("./messageHandler");

// Load session ID from environment or default
const SESSION_ID = process.env.SESSION_ID || "bmwxmd";
const AUTH_FILE = path.join(__dirname, `../session/auth_info_${SESSION_ID}.json`);
const { state, saveState } = useSingleFileAuthState(AUTH_FILE);

async function startBot() {
  const sock = makeWASocket({
    auth: state,
    logger: P({ level: "silent" }),
    printQRInTerminal: true, // still shows QR for testing if needed
    browser: ["SAVAGE-XMD", "Chrome", "1.0.0"]
  });

  // Save updated session when it changes
  sock.ev.on("creds.update", saveState);

  // Handle incoming messages
  sock.ev.on("messages.upsert", async (m) => {
    try {
      await messageHandler(sock, m);
    } catch (err) {
      console.error("❌ Error in message handler:", err);
    }
  });

  console.log("✅ SAVAGE-XMD is running with session:", SESSION_ID);
}

startBot();
