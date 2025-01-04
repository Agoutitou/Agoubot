const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joininfo")
    .setDescription("donne la date à laquelle l'utilisateur a join"),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(
      `${interaction.user.username} a rejoin le serveur le ${interaction.member.joinedAt}.`,
    );
  },
};
