const fs = require('node:fs');
const path = require('node:path');
const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
require('dotenv').config();

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.token);

rest.put(Routes.applicationCommands(process.env.clientId), { body: commands })
    .then(() => console.log('[/] Se han importado todos los comandos'))
    .catch(console.error);