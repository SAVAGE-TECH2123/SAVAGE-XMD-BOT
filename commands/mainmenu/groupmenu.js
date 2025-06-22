module.exports = {
  name: "groupmenu",
  alias: ["group", "gm"],
  category: "Main",
  desc: "Shows group moderation commands",
  use: "$groupmenu",
  async execute({ reply }) {
    reply(`╭━━━❰ GROUP MENU ❱━━━⬣
┃
┃📛 *Anti-Link*
┃➥ $antilink action delete
┃➥ $antilink action warn
┃➥ $antilink action remove
┃➥ $antilink off
┃
┃🚫 *Banned Words*
┃➥ $banwords add <word>
┃➥ $banwords remove <word>
┃➥ $banwords action delete|warn|remove
┃➥ $banwords off
┃
┃🤖 *Anti-Bot*
┃➥ $antibot action delete
┃➥ $antibot action warn
┃➥ $antibot action remove
┃➥ $antibot off
┃
┃👥 *Tag All*
┃➥ $tagall <optional message>
┃
┃🔗 *Join Group*
┃➥ $join <group link>
┃
┃👋 *Leave Group*
┃➥ $leave
┃
┃👢 *Kick Member*
┃➥ $kick @user
┃
┃🔼 *Promote Admin*
┃➥ $promote @user
┃
┃🔽 *Demote Admin*
┃➥ $demote @user
┃
╰━━━━━━━━━━━━━━━━⬣`);
  }
};
