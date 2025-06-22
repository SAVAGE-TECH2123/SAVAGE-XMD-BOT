module.exports = {
  name: "generalmenu",
  alias: ["general", "tools"],
  category: "Main",
  desc: "Displays the General Utility Commands",
  use: "$generalmenu",
  async execute({ reply }) {
    reply(`
╭───〔 ⚙️ *GENERAL MENU* 〕───⬣
│
│ 💬 Text & Tools
│ ├─ ❏ $say <text>
│ ├─ ❏ $math <expression>
│ ├─ ❏ $quote
│ ├─ ❏ $google <query>
│ ├─ ❏ $translate <lang> <text>
│
│ 👨🏾‍💻 Developer
│ └─ ❏ $developer
│
╰──────────────⬣
`);
  },
};
