const axios = require("axios");

module.exports = {
  name: "story",
  description: "Generate a short story using AI",
  usage: "$story <your prompt>",
  category: "AI",
  async execute({ m, args, reply }) {
    const prompt = args.join(" ");
    if (!prompt) return reply("📚 Please provide a topic. Example: $story a dragon who learns to fly");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Write a short creative story about: ${prompt}`,
            },
          ],
          max_tokens: 500,
          temperature: 0.8,
        },
        {
          headers: {
            "Authorization": `Bearer ${process.env.GOOGLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const story = response.data.choices[0].message.content.trim();
      reply(`📖 *Here's your story:*\n\n${story}`);
    } catch (error) {
      console.error(error);
      reply("❌ Failed to generate story. Please check your API key or try a different prompt.");
    }
  },
};
