const fs = require("fs");
const path = require("path");

module.exports = {
  name: "save",
  alias: ["backup", "store"],
  category: "Conservation",
  desc: "Save replied message (media/text) to bot storage",
  use: "$save (reply to message)",
  async execute({ m, sock }) {
    if (!m.quoted) return m.reply("⚠️ Please reply to the message or media you want to save.");

    const quoted = m.quoted;

    // Handle text
    if (quoted.type === "conversation" || quoted.text) {
      const content = quoted.text || quoted.message?.conversation;
      const filePath = path.join(__dirname, "..", "..", "saved", `note-${Date.now()}.txt`);

      fs.writeFileSync(filePath, content);
      return m.reply(`💾 Text saved successfully as:\n${path.basename(filePath)}`);
    }

    // Handle media (image, video, audio, etc.)
    const mime = quoted.mtype;
    const buffer = await quoted.download();

    if (!buffer) return m.reply("❌ Failed to download media.");

    const ext = mime.split("/")[1];
    const fileName = `media-${Date.now()}.${ext}`;
    const filePath = path.join(__dirname, "..", "..", "saved", fileName);

    fs.writeFileSync(filePath, buffer);
    await sock.sendMessage(m.chat, { text: `✅ Media saved as: ${fileName}` });
  }
};
