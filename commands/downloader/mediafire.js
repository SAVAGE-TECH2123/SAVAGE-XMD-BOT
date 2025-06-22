const axios = require("axios");

module.exports = {
  name: "mediafire",
  alias: ["mf"],
  category: "Downloader",
  desc: "Download file from Mediafire link",
  use: "$mediafire <mediafire link>",
  async execute({ args, reply, m, sock }) {
    const url = args[0];
    if (!url || !url.includes("mediafire.com")) {
      return reply("❗ Please provide a valid Mediafire link.\nExample: $mediafire https://www.mediafire.com/file/example");
    }

    try {
      reply("⏳ Fetching Mediafire file...");

      const res = await axios.get(`https://api.akuari.my.id/downloader/mediafire?link=${url}`);
      const { title, size, mime, link } = res.data.result;

      await sock.sendMessage(m.chat, {
        document: { url: link },
        mimetype: mime || "application/octet-stream",
        fileName: title,
        caption: `📄 *MediaFire Download*\n\n📌 *Title:* ${title}\n📦 *Size:* ${size}`,
      }, { quoted: m });

    } catch (err) {
      console.error(err);
      reply("❌ Failed to download from Mediafire. Try a different link.");
    }
  }
};
