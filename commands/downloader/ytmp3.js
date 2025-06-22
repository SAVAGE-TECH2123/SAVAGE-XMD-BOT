const axios = require("axios");

module.exports = {
  name: "ytmp3",
  alias: ["ytaudio"],
  category: "Downloader",
  desc: "Download YouTube audio as MP3",
  use: "$ytmp3 <youtube link>",
  async execute({ args, reply, m, sock }) {
    const url = args[0];
    if (!url || !url.includes("youtube.com") && !url.includes("youtu.be")) {
      return reply("❗ Please provide a valid YouTube link.\nExample: $ytmp3 https://youtu.be/video_id");
    }

    try {
      reply("⏳ Fetching audio...");

      const res = await axios.get(`https://ytmate.bnz/api/ytmp3?url=${url}`);
      const { title, thumb, link, quality } = res.data;

      await sock.sendMessage(m.chat, {
        image: { url: thumb },
        caption: `🎶 *Title:* ${title}\n📥 *Quality:* ${quality || "128kbps"}\n\nSending audio...`,
      }, { quoted: m });

      await sock.sendMessage(m.chat, {
        audio: { url: link },
        mimetype: "audio/mp4",
        ptt: false,
      }, { quoted: m });

    } catch (err) {
      console.error(err);
      reply("❌ Failed to download audio. Try another link or later.");
    }
  }
};
