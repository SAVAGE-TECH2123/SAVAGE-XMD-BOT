const os = require("os");
const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "stats",
  alias: ["botstats", "status"],
  category: "Bot",
  desc: "Show bot status info",
  use: "$stats",
  async execute({ reply }) {
    const config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
    const uptime = process.uptime(); // in seconds

    const formatUptime = (s) => {
      const h = Math.floor(s / 3600);
      const m = Math.floor((s % 3600) / 60);
      const sec = Math.floor(s % 60);
      return `${h}h ${m}m ${sec}s`;
    };

    reply(`📊 *BOT STATUS*

🕒 Uptime: ${formatUptime(uptime)}
📦 Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
🧠 Mode: ${config.mode?.toUpperCase() || "UNKNOWN"}
📆 Server Time: ${moment().format("YYYY-MM-DD HH:mm:ss")}
🖥️ Host: ${os.hostname()}
`);
  }
};
