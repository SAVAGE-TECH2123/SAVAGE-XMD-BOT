const axios = require("axios");

module.exports = {
  name: "gpt",
  description: "Chat with ChatGPT (GPT-3.5 Turbo)",
  usage: "$gpt <your message>",
  category: "AI",
  async execute({ m, args, reply }) {
    const prompt = args.join(" ");
    if (!prompt) return reply("💬 Please enter a question.\nExample: $gpt What is the fastest animal?");

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
          max_tokens: 1000
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.GOOGLE_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const responseText = res.data.choices[0].message.content;
      reply(`🤖 *GPT says:*\n\n${responseText}`);
    } catch (err) {
      console.error("GPT Error:", err.response?.data || err.message);
      reply("❌ Error while talking to GPT.");
    }
  }
};
