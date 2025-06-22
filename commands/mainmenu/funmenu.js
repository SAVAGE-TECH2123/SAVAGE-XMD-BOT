module.exports = {
  name: "funmenu",
  alias: ["fun", "funny"],
  category: "Main",
  desc: "Shows all fun-related commands",
  use: "$funmenu",
  async execute({ reply }) {
    reply(`╭━━━🎉 *FUN MENU* 🎉━━⬣
┃
┃🤣 $joke — Get a random joke
┃🤔 $truth — Random truth question
┃🔥 $dare — Random dare challenge
┃🖼️ $meme — Random meme from Reddit
┃🗣️ $say <text> — Bot repeats your text
┃
╰━━━━━━━━━━━━━━━━━━━━⬣`);
  }
};
