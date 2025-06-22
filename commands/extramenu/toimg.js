module.exports = {
  name: "toimg",
  alias: ["imgsticker", "stickertoimg"],
  category: "Extra",
  desc: "Convert sticker to image",
  use: "$toimg (reply to sticker)",
  async execute({ m, mime, quoted, sock, reply }) {
    if (!quoted || !/webp/.test(mime)) {
      return reply("❗Please reply to a *sticker* to convert it to an image.");
    }

    try {
      let media = await quoted.download();
      await sock.sendMessage(m.chat, {
        image: media,
        caption: "🖼️ Here is your image.",
      }, { quoted: m });
    } catch (e) {
      console.error(e);
      reply("❌ Failed to convert sticker to image.");
    }
  }
};
