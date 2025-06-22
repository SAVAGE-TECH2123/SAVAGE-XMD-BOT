module.exports = {
  name: "quoteit",
  alias: ["quote", "repeatmsg"],
  category: "Conservation",
  desc: "Quote the replied message",
  use: "$quoteit (reply to any message)",
  async execute({ m, sock }) {
    if (!m.quoted) return m.reply("🗯️ Please reply to a message to quote it.");

    try {
      const quoted = m.quoted;
      const msgType = quoted.mtype;

      if (quoted.text) {
        // Quote text message
        return sock.sendMessage(m.chat, { text: quoted.text }, { quoted: m });
      }

      // Quote media message
      const media = await quoted.download();
      if (!media) return m.reply("❌ Failed to quote media.");

      let msgOptions = {};
      if (msgType.includes("image")) msgOptions = { image: media };
      else if (msgType.includes("video")) msgOptions = { video: media };
      else if (msgType.includes("audio")) msgOptions = { audio: media, mimetype: "audio/mp4" };
      else msgOptions = { document: media, mimetype: quoted.mime || "application/octet-stream" };

      await sock.sendMessage(m.chat, msgOptions, { quoted: m });
    } catch (err) {
      console.error(err);
      m.reply("❌ Error quoting the message.");
    }
  }
};
