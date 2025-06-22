module.exports = {
  name: "developer",
  alias: ["dev", "creator", "author"],
  category: "Bot",
  desc: "Shows info about the developer of the bot",
  use: "$developer",
  async execute({ reply }) {
    reply(`
╭───〔 👨🏾‍💻 *BOT DEVELOPER* 〕───⬣
│
│ 🔹 *Name:* SAVAGE_B.O.Y
│ 🔹 *Bot:* SAVAGE-XMD
│ 🔹 *GitHub:* github.com/CKLAMZY-AI/SAVAGE-XMD
│ 🔹 *Contact:* wa.me/255765457691
│ 🔹 *Credits:* BWM-XMD-QUANTUM, IbrahimAdams, OpenAI, Baileys
│
╰──────────────⬣
`);
  },
};
