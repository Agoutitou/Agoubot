const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("repond juste pong (c'est juste pour test le bot)"),
  async execute(interaction) {
    await interaction.reply("pong");
  },
};
