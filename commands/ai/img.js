const axios = require("axios");

module.exports = {
  name: "img",
  description: "Generate an image from a prompt using AI",
  usage: "$img <prompt>",
  category: "AI",
  async execute({ m, args, reply }) {
    const prompt = args.join(" ");
    if (!prompt) return reply("🖼️ Please provide a prompt. Example: $img a robot sitting on the beach");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: prompt,
          n: 1,
          size: "512x512"
        },
        {
          headers: {
            "Authorization": `Bearer ${process.env.GOOGLE_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const imageUrl = response.data.data[0].url;
      await m.sendMessage(m.chat, { image: { url: imageUrl }, caption: `🖼️ AI Image for: "${prompt}"` }, { quoted: m });
    } catch (err) {
      console.error(err);
      reply("❌ Failed to generate image. Make sure your API key is correct and prompt is valid.");
    }
  },
};
