const axios = require("axios");

module.exports = {
  name: "ai",
  description: "Ask the AI anything.",
  usage: "$ai <question>",
  category: "AI",
  async execute({ m, args, reply }) {
    const question = args.join(" ");
    if (!question) return reply("❓ Please ask a question. Example: $ai what is the capital of Kenya?");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: question,
          max_tokens: 1000,
        },
        {
          headers: {
            "Authorization": `Bearer ${process.env.GOOGLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      reply(response.data.choices[0].text.trim());
    } catch (err) {
      console.error(err);
      reply("❌ AI Error: " + err.response?.data?.error?.message || err.message);
    }
  },
};
