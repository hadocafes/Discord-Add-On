const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Devuelve la latencia de edición de mensaje del bot')
        .setDMPermission(false),
    async execute(client, interaction) {

        const message = await interaction.reply({ content: '🏓 Ping', ephemeral: true, fetchReply: true })
        interaction.editReply(`🏓 ¡Pong! He tardado ${message.createdTimestamp - interaction.createdTimestamp} ms.\n🟢 <t:${Math.floor(client.readyTimestamp / 1000)}:R>`)

    }
}