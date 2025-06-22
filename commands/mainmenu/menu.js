module.exports = {
  name: "menu",
  alias: ["help", "allmenu"],
  category: "Main",
  desc: "Shows full bot menu with image and all categories",
  use: "$menu",
  async execute({ sock, m }) {
    const imageUrl = "https://files.catbox.moe/jqvqj2.jpeg";

    // Step 1: Send loading bar
    const loading = await sock.sendMessage(m.chat, {
      text: `🔄 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙼𝙴𝙽𝚄...\n\n▰▱▱▱▱▱▱▱▱ 10%`,
    });

    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    const updates = [
      `▰▰▱▱▱▱▱▱▱ 25%`,
      `▰▰▰▰▱▱▱▱▱ 50%`,
      `▰▰▰▰▰▰▱▱▱ 75%`,
      `▰▰▰▰▰▰▰▰▰ 100%\n\n✅ Menu loaded successfully!`,
    ];

    for (let i = 0; i < updates.length; i++) {
      await wait(600);
      await sock.sendMessage(m.chat, {
        edit: loading.key,
        text: `🔄 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙼𝙴𝙽𝚄...\n\n${updates[i]}`,
      });
    }

    // Step 2: Final menu content
    const menuText = `
╭━━━━〔 🔰 *BOT INFO* 🔰 〕━━━━╮
│ 🤖 Name: *SAVAGE-XMD*
│ 👨‍💻 Dev: *SAVAGE_B.O.Y*
│ ⚡ Hosted On: *Render*
│ 🧩 Prefix: *$*
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 📂 *FULL MENU* 📂 〕━━━╮

🧠 *AI MENU*
├─ $ai, $gpt, $chatgpt
├─ $img, $story

😂 *FUN MENU*
├─ $fun, $joke, $truth, $dare, $meme, $say

🎮 *GAMES MENU*
├─ $rps, $guess, $fasttype, $tictactoe, $coinflip

📥 *DOWNLOAD MENU*
├─ $ytmp3, $mediafire, $apk, $tiktok, $ig, $video, $mp3

👥 *GROUP MENU*
├─ $antilink, $antibot, $tagall, $join, $leave
├─ $kick, $promote, $demote

🙏 *GOD MENU*
├─ $verse, $pray, $bible, $quran, $jesus, $psalm, $allah, $duaa

📰 *NEWS MENU*
├─ $headlines, $technews, $entertainment, $liveevents, $popups

📚 *GENERAL MENU*
├─ $say, $math, $quote, $google, $translate, $developer

💾 *CONSERVATION MENU*
├─ $save, $edit, $delete, $quoteit

╰━━━━━━━━━━━━━━━━━━━━━━╯
`;

    // Step 3: Send image with caption
    await sock.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: menuText,
    });
  },
};
