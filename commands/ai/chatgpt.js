const axios = require("axios");

module.exports = {
  name: "chatgpt",
  description: "Chat with OpenAI ChatGPT",
  usage: "$chatgpt <your message>",
  category: "AI",
  async execute({ m, args, reply }) {
    const text = args.join(" ");
    if (!text) return reply("❓ Please ask something. Example: $chatgpt Explain photosynthesis.");

    try {
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: text }],
          temperature: 0.7,
          max_tokens: 1000
        },
        {
          headers: {
            "Authorization": `Bearer ${process.env.GOOGLE_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const output = result.data.choices[0].message.content;
      reply(`🤖 *ChatGPT says:*\n\n${output}`);
    } catch (err) {
      console.error(err.response?.data || err.message);
      reply("❌ Failed to get a response from ChatGPT.");
    }
  }
};
