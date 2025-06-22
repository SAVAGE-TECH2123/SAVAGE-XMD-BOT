const moment = require("moment-timezone");

module.exports = {
  name: "time",
  alias: ["jam", "clock"],
  category: "Extra",
  desc: "Show current server time",
  use: "$time",
  async execute({ reply }) {
    const time = moment().tz("Africa/Dar_es_Salaam").format("HH:mm:ss");
    reply(`🕒 Current Time: *${time}* (Africa/Dar_es_Salaam)`);
  }
};
