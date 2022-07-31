const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Avatar')
        .setType(ApplicationCommandType.User),
    async execute(client, interaction) {

        const member = interaction.targetMember;

        const embed = new EmbedBuilder()
            .setAuthor({ name: `Avatar de ${member.displayName}`, url: member.displayAvatarURL({ dynamic: true, size: 1024 })})
            .setImage(member.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setColor(0x5367F6)
        interaction.reply({ embeds: [embed], ephemeral: true });

    }
}