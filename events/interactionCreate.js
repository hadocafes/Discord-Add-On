module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {

        if (interaction.isChatInputCommand() || interaction.isContextMenuCommand()) {

            const command = client.commands.get(interaction.commandName);
    
            if (!command) return;
        
            try { 
                await command.execute(client, interaction) 
            } catch (error) {
                console.error(error);
                interaction.reply({ content: '⁉️ ¡Ups! Algo ha fallado, habla con <@680189998750105711> y cuéntale sobre este error.', ephemeral: true });
            }
    
        }

    }
}