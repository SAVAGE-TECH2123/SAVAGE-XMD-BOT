module.exports = {
  name: "sticker",
  alias: ["stik", "stikera"],
  category: "Extra",
  desc: "Convert image or short video to sticker",
  use: "$sticker (reply to media)",
  async execute({ m, mime, quoted, sock, reply }) {
    if (!quoted) return reply("❗Please reply to an image or short video.");

    let media = await quoted.download();

    if (mime.includes("image")) {
      await sock.sendMessage(m.chat, { sticker: media }, { quoted: m });
    } else if (mime.includes("video")) {
      if ((quoted.seconds || 0) > 11) return reply("❗Video too long! Max 10 seconds.");
      await sock.sendMessage(m.chat, { sticker: media }, { quoted: m });
    } else {
      reply("❌ Unsupported media type. Reply to an image or a short video.");
    }
  }
};
