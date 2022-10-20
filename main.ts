// =============================================================
// || Discord Bot TypeScript Template                         ||
// =============================================================
// || AUTHOR: Harley Welsby, https://github.com/harleywelsby  ||
// =============================================================

import { ActivityType, Client, Events, IntentsBitField } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import config from './config/config.json' assert { type: 'json' };

export const bot: Client = new Client({ intents: [
    IntentsBitField.Flags.Guilds, 
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers
    ], 
});
const commands: string[] = [];

// Load commands into Discord.js from ./commands
import('./commands/commandRegister.js').then((slashCommandBuilders) => {
    Object.keys(slashCommandBuilders).forEach((key) => {
        commands.push(slashCommandBuilders[key].toJSON());
    });

    // Refresh slash commands on startup
    const rest = new REST({ version: '10' }).setToken(config.Token);
    (async () => {
        try {
            console.log(`Refreshing ${commands.length} Slash Commands`);
            
            const data: any = await rest.put(
                Routes.applicationCommands(config.ClientId),
                { body: commands }
            );

            console.log(`${data.length} slash commands refreshed`);
        }
        catch (error) {
            console.error(error);
        }
    })();

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
});