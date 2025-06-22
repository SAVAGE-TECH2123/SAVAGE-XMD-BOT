module.exports = {
  name: "newsmenu",
  alias: ["news", "globalnews"],
  category: "Main",
  desc: "Displays the full list of news commands",
  use: "$newsmenu",
  async execute({ reply }) {
    reply(`
╭───〔 📰 *NEWS MENU* 〕───⬣
│
│ ⚽ *Sports News*
│ ├─ ❏ $football
│
│ 🌍 *Global Headlines*
│ ├─ ❏ $headlines
│ ├─ ❏ $liveevents
│ ├─ ❏ $popups
│
│ 💻 *Tech & Entertainment*
│ ├─ ❏ $technews
│ ├─ ❏ $entertainment
│
╰──────────────⬣
`);
  },
};
