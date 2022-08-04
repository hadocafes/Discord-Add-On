const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Más información')
        .setType(ApplicationCommandType.User),
    async execute(client, interaction) {

        const member = interaction.targetMember;
        const user = interaction.targetUser;
        let description = `${member.roles.cache.filter((roles) => roles.id !== interaction.guild.id).map((role) => role.toString()).join(' ')}`;

        if (description === '') description = ':new_moon: *sin ningún rol*'
        const embed = new EmbedBuilder()
            .setTitle(`Información sobre ${member.displayName}`)
            .setColor('Blurple')
            .setThumbnail(member.displayAvatarURL({ dynamic: true, size: 1024 }))
            mensajeaislado = ''

            if (member.communicationDisabledUntilTimestamp) {

                description = `<:timeout:1004862353738829834> Caduca <t:${Math.floor(member.communicationDisabledUntilTimestamp / 1000)}:R>\n` + description

            } 
            
            embed.addFields({ name: 'Usuario', value: `**Nombre de Usuario:** ${user.username}\n**ID:** \`${user.id}\`\n**Perfil:** ${user}\n**Creado el** <t:${Math.floor(user.createdTimestamp / 1000)}:F> [<t:${Math.floor(user.createdTimestamp / 1000)}:R>]\n**Se ha unido el** <t:${Math.floor(member.joinedTimestamp / 1000)}:F> [<t:${Math.floor(member.joinedTimestamp / 1000)}:R>]`})
            .setDescription(description)

        interaction.reply({ embeds: [embed], ephemeral: true });

    }
}