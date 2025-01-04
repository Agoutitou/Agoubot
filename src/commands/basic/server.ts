const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("donne le nombre de membre du serveur"),
  async execute(interaction) {
    // interaction.guild is the object representing the Guild in which the command was run
    await interaction.reply(
      `${interaction.guild.name} a ${interaction.guild.memberCount} membres.`,
    );
  },
};
