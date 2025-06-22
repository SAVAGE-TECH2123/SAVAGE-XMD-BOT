module.exports = {
  name: "ping",
  alias: ["speed", "latency"],
  category: "Bot",
  desc: "Check bot response speed",
  use: "$ping",
  async execute({ reply }) {
    const start = Date.now();
    await reply("🏓 Pinging...");
    const end = Date.now();
    const speed = end - start;
    reply(`📶 Pong!\nResponse Time: *${speed}ms*`);
  },
};
