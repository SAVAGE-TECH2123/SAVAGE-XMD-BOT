const fs = require("fs");
const configPath = "./config.json"; // Adjust if stored elsewhere

module.exports = {
  name: "setprefix",
  alias: ["changeprefix"],
  category: "Bot",
  desc: "Change bot prefix (owner only)",
  use: "$setprefix <new prefix>",
  async execute({ args, reply, m }) {
    if (!m.isOwner) return reply("❌ Only the bot owner can change the prefix.");

    const newPrefix = args[0];
    if (!newPrefix || newPrefix.length > 2) {
      return reply("❗ Please provide a valid prefix (1-2 characters).\nExample: $setprefix !");
    }

    try {
      const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
      config.prefix = newPrefix;
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

      reply(`✅ Prefix successfully changed to *${newPrefix}*`);
    } catch (err) {
      console.error(err);
      reply("❌ Failed to update prefix. Make sure config.json is writable.");
    }
  }
};
