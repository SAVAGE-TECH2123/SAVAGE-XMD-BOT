const axios = require("axios");

module.exports = {
  name: "ig",
  alias: ["instagram", "instadl"],
  category: "Downloader",
  desc: "Download Instagram photos/videos",
  use: "$ig <instagram post url>",
  async execute({ args, reply, m, sock }) {
    const url = args[0];
    if (!url || !url.includes("instagram.com")) {
      return reply("❗ Please provide a valid Instagram post link.\nExample: $ig https://www.instagram.com/p/POST_ID");
    }

    try {
      reply("⏳ Fetching Instagram media...");

      const res = await axios.get(`https://api.akuari.my.id/downloader/igdl?link=${url}`);
      const media = res.data.respon;

      if (!media || media.length === 0) return reply("❌ No media found.");

      for (const item of media) {
        if (item.includes(".mp4")) {
          await sock.sendMessage(m.chat, {
            video: { url: item },
            caption: "📥 Instagram Video",
          }, { quoted: m });
        } else {
          await sock.sendMessage(m.chat, {
            image: { url: item },
            caption: "📸 Instagram Photo",
          }, { quoted: m });
        }
      }

    } catch (err) {
      console.error(err);
      reply("❌ Failed to download Instagram media. Try another link or later.");
    }
  }
};
