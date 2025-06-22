module.exports = {
  name: "tovideo",
  alias: ["sticker2vid", "webptovideo"],
  category: "Extra",
  desc: "Convert animated sticker to video",
  use: "$tovideo (reply to sticker)",
  async execute({ m, mime, quoted, sock, reply }) {
    if (!quoted || !/webp/.test(mime)) {
      return reply("❗Please reply to an animated *sticker* to convert it to a video.");
    }

    try {
      let media = await quoted.download();

      await sock.sendMessage(m.chat, {
        video: media,
        caption: "🎥 Here's your video.",
      }, { quoted: m });

    } catch (err) {
      console.error(err);
      reply("❌ Failed to convert sticker to video.");
    }
  }
};
