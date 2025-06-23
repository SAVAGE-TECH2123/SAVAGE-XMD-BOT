const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const P = require("pino");
const messageHandler = require("./messageHandler");

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth"); // Loads session from auth folder

  const sock = makeWASocket({
    auth: state,
    logger: P({ level: "silent" }),
    printQRInTerminal: true, // shows QR or pairing code
    browser: ["SAVAGE-XMD", "Chrome", "1.0.0"],
  });

  // Save session on update
  sock.ev.on("creds.update", saveCreds);

  // Handle incoming messages
  sock.ev.on("messages.upsert", async (m) => {
    try {
      await messageHandler(sock, m);
    } catch (err) {
      console.error("❌ Error in message handler:", err);
    }
  });

  console.log("✅ SAVAGE-XMD is up and running!");
}

startBot();
