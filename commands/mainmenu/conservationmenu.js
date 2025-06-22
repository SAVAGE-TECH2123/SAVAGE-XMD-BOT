module.exports = {
  name: "conservationmenu",
  alias: ["conservation", "conversationmenu", "convomenu"],
  category: "Main",
  desc: "Shows message conservation and manipulation features",
  use: "$conservationmenu",
  async execute({ reply }) {
    reply(`╭─❏ 🧠 *CONSERVATION MENU* ❏
│
│ 📝 *Save Messages*
│ ├─ 💾 $save <message>
│ └─     Save a message permanently.
│
│ 🔁 *Edit Messages*
│ ├─ ✏️ $edit <new text>
│ └─     Edits your saved message.
│
│ 🗑️ *Delete Saved*
│ ├─ ❌ $delete
│ └─     Deletes the last saved message.
│
│ 💬 *Quote Messages*
│ ├─ 🧷 $quoteit
│ └─     Quotes the last saved message.
│
╰───────────────`);
  },
};
