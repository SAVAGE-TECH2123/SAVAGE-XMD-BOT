module.exports = {
  name: "godmenu",
  alias: ["god", "religion"],
  category: "Main",
  desc: "Displays God-first spiritual commands",
  use: "$godmenu",
  async execute({ reply }) {
    reply(`
╭───〔 🙏 *GOD IS FIRST* MENU 〕───⬣
│
│ ✝️ *Christian Commands*
│ ├─ ❏ $verse <topic>
│ ├─ ❏ $bible <John 3:16>
│ ├─ ❏ $psalm <number>
│ ├─ ❏ $jesus
│ └─ ❏ $gospel
│
│ ☪️ *Islamic Commands*
│ ├─ ❏ $quran <2:255>
│ ├─ ❏ $allah
│ ├─ ❏ $hadithi
│ └─ ❏ $duaa
│
│ 🌟 *Spiritual & Uplifting*
│ ├─ ❏ $pray
│ ├─ ❏ $devotion
│ ├─ ❏ $blessings
│ └─ ❏ $god
│
╰──────────────⬣
`);
  },
};
