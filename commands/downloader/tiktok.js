const axios = require("axios");

module.exports = {
  name: "tiktok",
  alias: ["ttdl", "tt"],
  category: "Downloader",
  desc: "Download TikTok video without watermark",
  use: "$tiktok <tiktok video url>",
  async execute({ args, reply, m, sock }) {
    const url = args[0];
    if (!url || !url.includes("tiktok.com")) {
      return reply("❗ Please provide a valid TikTok link.\nExample: $tiktok https://www.tiktok.com/@user/video/123456");
    }

    try {
      reply("⏳ Fetching TikTok video...");

      const res = await axios.get(`https://api.akuari.my.id/downloader/tiktok?link=${url}`);
      const { title, video_no_watermark } = res.data.respon;

      await sock.sendMessage(m.chat, {
        video: { url: video_no_watermark },
        caption: `🎵 *TikTok Downloaded*\n\n📌 ${title || "Here is your video!"}`,
      }, { quoted: m });

    } catch (err) {
      console.error(err);
      reply("❌ Failed to download TikTok video. Try another link or later.");
    }
  }
};
