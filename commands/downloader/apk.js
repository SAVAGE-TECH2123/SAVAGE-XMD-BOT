const axios = require("axios");

module.exports = {
  name: "apk",
  alias: ["apkdownload"],
  category: "Downloader",
  desc: "Search and download APKs by app name",
  use: "$apk <app name>",
  async execute({ args, reply, m, sock }) {
    const query = args.join(" ");
    if (!query) return reply("❗ Provide an app name to search.\nExample: $apk WhatsApp");

    try {
      reply("🔍 Searching for APK...");

      const res = await axios.get(`https://api.dapuhy.xyz/downloader/apk?query=${encodeURIComponent(query)}&apikey=dapi`);
      const data = res.data.result;

      if (!data || !data.apk) return reply("❌ App not found.");

      const { title, version, size, download, icon } = data.apk;

      await sock.sendMessage(m.chat, {
        image: { url: icon },
        caption: `📱 *APK Download Found!*\n\n📌 *Name:* ${title}\n🆙 *Version:* ${version}\n📦 *Size:* ${size}\n⬇️ *Download:* ${download}`,
      }, { quoted: m });

      await sock.sendMessage(m.chat, {
        document: { url: download },
        mimetype: "application/vnd.android.package-archive",
        fileName: `${title}.apk`
      }, { quoted: m });

    } catch (err) {
      console.error(err);
      reply("❌ Error fetching APK. Try another app or later.");
    }
  }
};
