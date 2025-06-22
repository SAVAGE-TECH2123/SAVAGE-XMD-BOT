const axios = require("axios");

module.exports = {
  name: "ytmp4",
  alias: ["ytvideo"],
  category: "Downloader",
  desc: "Download YouTube video as MP4",
  use: "$ytmp4 <youtube link>",
  async execute({ args, reply, m, sock }) {
    const url = args[0];
    if (!url || !url.includes("youtube.com") && !url.includes("youtu.be")) {
      return reply("❗ Please provide a valid YouTube link.\nExample: $ytmp4 https://youtu.be/video_id");
    }

    try {
      reply("⏳ Fetching video...");

      const res = await axios.get(`https://ytmate.bnz/api/ytmp4?url=${url}`);
      const { title, thumb, link, quality } = res.data;

      await sock.sendMessage(m.chat, {
        image: { url: thumb },
        caption: `🎬 *Title:* ${title}\n📺 *Quality:* ${quality || "360p"}\n\nSending video...`,
      }, { quoted: m });

      await sock.sendMessage(m.chat, {
        video: { url: link },
        caption: title,
      }, { quoted: m });

    } catch (err) {
      console.error(err);
      reply("❌ Failed to download video. Try another link or later.");
    }
  }
};
