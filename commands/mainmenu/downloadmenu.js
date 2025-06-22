module.exports = {
  name: "downloadmenu",
  alias: ["downmenu", "dlmenu"],
  category: "Main",
  desc: "Show all downloader features",
  use: "$downloadmenu",
  async execute({ reply }) {
    reply(`📥 *DOWNLOAD MENU* 📥

🎵 *YouTube Music*
• $ytmp3 <yt link>
• $mp3 <song name>

🎬 *YouTube Video*
• $ytmp4 <yt link>
• $video <title>

🎶 *Social Media*
• $tiktok <tiktok url>
• $ig <instagram url>

📦 *File Downloaders*
• $mediafire <link>
• $apk <app name>

`);
  }
};
