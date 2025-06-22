const axios = require("axios");

module.exports = {
  name: "mp3",
  alias: ["music", "mp3search"],
  category: "Downloader",
  desc: "Search and download MP3 by song name",
  use: "$mp3 <song name>",
  async execute({ args, reply, m, sock }) {
    const query = args.join(" ");
    if (!query) return reply("❗ Please enter a song title.\nExample: $mp3 Harmonize single again");

    try {
      reply("🔍 Searching for song...");

      const res = await axios.get(`https://api.akuari.my.id/downloader/song?query=${encodeURIComponent(query)}`);
      const { title, link, thumb, size } = res.data.respon;

      await sock.sendMessage(m.chat, {
        image: { url: thumb },
        caption: `🎵 *Title:* ${title}\n📦 *Size:* ${size}\n\n⬇️ Sending audio...`,
      }, { quoted: m });

      await sock.sendMessage(m.chat, {
        audio: { url: link },
        mimetype: "audio/mp4",
        ptt: false,
      }, { quoted: m });

    } catch (err) {
      console.error(err);
      reply("❌ Failed to find or send the song. Try again later.");
    }
  }
};
