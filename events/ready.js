const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {

        console.log('¡Estoy listo!');
        client.channels.cache.get('1014970704912994375').send({ content: '📶 Reinicio'});
        
    }
}