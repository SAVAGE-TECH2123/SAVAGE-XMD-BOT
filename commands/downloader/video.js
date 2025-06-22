const axios = require("axios");

module.exports = {
  name: "video",
  alias: ["ytvideo", "ytfind"],
  category: "Downloader",
  desc: "Search and download a YouTube video by name",
  use: "$video <title>",
  async execute({ args, reply, m, sock }) {
    const query = args.join(" ");
    if (!query) return reply("❗ Provide a video name to search.\nExample: $video Alan Walker Faded");

    try {
      reply("🔍 Searching YouTube...");

      const searchRes = await axios.get(`https://api.akuari.my.id/search/ytsearch?query=${encodeURIComponent(query)}`);
      const result = searchRes.data.respon[0]; // get the first result

      if (!result?.url) return reply("❌ No results found.");

      const { title, url, thumbnail } = result;

      // Download video via ytmp4 API
      const dlRes = await axios.get(`https://ytmate.bnz/api/ytmp4?url=${url}`);
      const { link, quality } = dlRes.data;

      await sock.sendMessage(m.chat, {
        image: { url: thumbnail },
        caption: `🎬 *${title}*\n📺 *Quality:* ${quality || "360p"}\n\n⬇️ Downloading video...`,
      }, { quoted: m });

      await sock.sendMessage(m.chat, {
        video: { url: link },
        caption: title,
      }, { quoted: m });

    } catch (err) {
      console.error(err);
      reply("❌ Failed to find or download the video.");
    }
  }
};
