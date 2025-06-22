module.exports = {
  name: "aimenu",
  alias: ["ai", "gptmenu"],
  category: "Main",
  desc: "Shows AI and ChatGPT-related commands",
  use: "$aimenu",
  async execute({ reply }) {
    reply(`╭━━━❰ 🤖 AI MENU ❱━━━⬣
┃
┃💬 *Ask ChatGPT*
┃➥ $ai <question>
┃➥ $gpt <question>
┃➥ $chatgpt <question>
┃
┃🖼️ *Image Generator*
┃➥ $img <description>
┃   ↳ AI draws what you describe.
┃
┃📖 *Story Maker*
┃➥ $story <theme>
┃   ↳ Creates a short creative story.
┃
╰━━━━━━━━━━━━━━━━⬣`);
  }
};
