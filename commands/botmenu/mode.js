const fs = require("fs");
const path = "./config.json"; // Adjust if your config is stored elsewhere

module.exports = {
  name: "mode",
  alias: ["setmode"],
  category: "Bot",
  desc: "Switch between public and private bot mode",
  use: "$mode <public|private>",
  async execute({ args, reply, m }) {
    const mode = args[0]?.toLowerCase();

    if (!m.isOwner) return reply("❌ Only the bot owner can change the mode.");
    if (!mode || !["public", "private"].includes(mode)) {
      return reply("❗ Usage: $mode public OR $mode private");
    }

    try {
      let config = JSON.parse(fs.readFileSync(path, "utf8"));
      config.mode = mode;
      fs.writeFileSync(path, JSON.stringify(config, null, 2));

      reply(`✅ Bot mode successfully changed to *${mode.toUpperCase()}*`);
    } catch (err) {
      console.error(err);
      reply("❌ Failed to update mode. Make sure config.json is accessible.");
    }
  }
};
