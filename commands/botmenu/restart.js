module.exports = {
  name: "restart",
  alias: ["reboot", "relaunch"],
  category: "Bot",
  desc: "Restart the bot (owner only)",
  use: "$restart",
  async execute({ reply, m }) {
    if (!m.isOwner) return reply("❌ Only the bot owner can restart the bot.");

    await reply("♻️ Restarting bot... Please wait a few seconds.");

    setTimeout(() => {
      process.exit(0); // Exits the process so Render/PM2/host restarts it
    }, 1500);
  }
};
