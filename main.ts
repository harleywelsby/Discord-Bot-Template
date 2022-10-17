// =============================================================
// || Discord Bot TypeScript Template                         ||
// =============================================================
// || AUTHOR: Harley Welsby, https://github.com/harleywelsby  ||
// =============================================================

import { Client, IntentsBitField } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { createRequire } from 'module';

// Load the config json from ./config
const require = createRequire(import.meta.url);
export const config: JSON = require('./config.json');

// Load commands into Discord.js
const commands = [];
// commands.push(yourCommand.toJSON());

// Refresh slash commands on startup
const rest = new REST({ version: '9' }).setToken(config["Token"]);
(async () => {
    try {
        console.log('Refreshing Slash Commands');
        await rest.put(
            Routes.applicationGuildCommands(config["ClientId"], config["GuildId"]),
            { body: commands }
        );
    }
    catch (error) {
        console.error(error);
    }
})();

// Create the client
export const bot = new Client({ intents: [
    IntentsBitField.Flags.Guilds, 
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers
    ], 
});

// Login
bot.on('ready', () => {
    console.log('logged in!');
    
    // Custom activity - displays in the members side bar in the server
    // bot.user!.setActivity('Custom activity here', { type: ActivityType.Playing });
});

// Check for commands as they happen
bot.on('interactionCreate', interaction => {
    if (!interaction.isCommand()) return;

    switch (interaction.commandName) {
        default:
            break;
    }
});

bot.login(config["Token"]);