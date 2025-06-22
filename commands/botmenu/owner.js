module.exports = {
  name: "owner",
  alias: ["creator", "dev"],
  category: "Bot",
  desc: "Show developer contact info",
  use: "$owner",
  async execute({ reply }) {
    reply(`👤 *BOT OWNER INFO*

🧑‍💻 Name: SAVAGE_B.O.Y
📱 WhatsApp: wa.me/255765457691
💻 GitHub: https://github.com/CKLAMZY-AI
🌐 Project: SAVAGE-XMD Bot

Use *$menu* to explore available features.`);
  }
};
