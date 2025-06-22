module.exports = {
  name: "extramenu",
  alias: ["extras", "toolsmenu"],
  category: "Main",
  desc: "Show all extra utility features",
  use: "$extramenu",
  async execute({ reply }) {
    reply(`🧰 *EXTRA TOOLS MENU*

🕒 $time – Get current time
📅 $date – Get today's date
🔗 $short <link> – Shorten long URL
🖼️ $sticker – Convert image/video to sticker
🧃 $toimg – Convert sticker to image
🎥 $tovideo – Convert sticker to video

These are bonus tools built into SAVAGE-XMD.
Use *$menu* to view more categories.`);
  }
};
