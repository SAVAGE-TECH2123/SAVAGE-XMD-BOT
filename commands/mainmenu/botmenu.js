module.exports = {
  name: "botmenu",
  alias: ["sysmenu", "devmenu"],
  category: "Main",
  desc: "Show all bot system commands",
  use: "$botmenu",
  async execute({ reply }) {
    reply(`🤖 *BOT SYSTEM MENU*

🛰️ $ping – Check bot response speed
🔁 $restart – Restart the bot
🔐 $mode <public|private> – Change bot access mode
⚙️ $setprefix <symbol> – Set bot command prefix
📊 $stats – View bot uptime and memory info
👤 $owner – Show developer contact

Use *$menu* to explore all other command menus.`);
  }
};
