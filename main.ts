// =============================================================
// || Discord Bot TypeScript Template                         ||
// =============================================================
// || AUTHOR: Harley Welsby, https://github.com/harleywelsby  ||
// =============================================================

import { ActivityType, Client, Events, IntentsBitField } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
// import { createRequire } from 'module';
import config from './config/config.json' assert { type: 'json' };
import fs from 'node:fs';

// Load the config json
//const require: NodeRequire = createRequire(import.meta.url);
// export const config: JSON = require('../config/config.json');

// Load commands into Discord.js
// See https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands
const commands: string[] = [];
const commandFiles: string[] = fs.readdirSync('./commands').filter(file => file.endsWith('.js') || file.endsWith('.ts'));
for (const file of commandFiles) {
    let command: string = file;
    if (file.endsWith('.ts')) {
        command = file.slice(0, -3) + '.js';
    }
    // commands.push(command.data.toJSON());
}

// Refresh slash commands on startup
const rest = new REST({ version: '10' }).setToken(config.Token);
(async () => {
    try {
        console.log(`Refreshing ${commands.length} Slash Commands`);
        
        const data = await rest.put(
            Routes.applicationCommands(config.ClientId),
            { body: commands }
        );

        // console.log(typeof data);
        // console.log(`${data.length} slash commands refreshed`);
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
bot.on(Events.ClientReady, () => {
    console.log('logged in!');
    
    // Custom activity - displays in the members side bar in the server
    bot.user!.setActivity('Cool custom message here', { type: ActivityType.Playing });
});

// Check for commands as they happen
bot.on(Events.InteractionCreate, interaction => {
    if (!interaction.isChatInputCommand()) return;

    switch (interaction.commandName) {
        case 'ExampleCommand':
            // doCommand(interaction);
        default:
            break;
    }
});

bot.login(config.Token);