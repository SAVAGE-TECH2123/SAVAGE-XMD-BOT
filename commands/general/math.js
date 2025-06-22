module.exports = {
  name: "math",
  alias: ["calc", "calculate"],
  category: "General",
  desc: "Solve a math expression",
  use: "$math <expression>",
  async execute({ args, reply }) {
    if (!args.length) return reply("🧮 Please provide a math expression.\n\nExample: $math 2 + 2 * 3");

    const input = args.join(" ");
    try {
      const result = eval(input);
      reply(`🧠 Expression: *${input}*\n📊 Result: *${result}*`);
    } catch (e) {
      reply("❌ Invalid expression. Example: $math (10 / 2) + 4");
    }
  }
};
