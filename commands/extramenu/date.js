const moment = require("moment-timezone");

module.exports = {
  name: "date",
  alias: ["tarehe", "calendar"],
  category: "Extra",
  desc: "Show current date",
  use: "$date",
  async execute({ reply }) {
    const date = moment().tz("Africa/Dar_es_Salaam").format("dddd, MMMM Do YYYY");
    reply(`📅 Today's Date: *${date}*`);
  }
};
