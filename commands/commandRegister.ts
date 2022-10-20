import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Events } from 'discord.js';
import { bot } from '../main.js';
import { doExampleCommand } from './exampleCommand.js';

// Functions called by commands

bot.on(Events.InteractionCreate, interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction as CommandInteraction;

    switch (command.commandName) {
        case 'examplecommand':
            doExampleCommand(command);
            break;
        default:
            command.reply(`I don't recognize that command ${command.user}`);
    }
});

// Commands

export const thingCommand = new SlashCommandBuilder()
    .setName('examplecommand')
    .setDescription('Say hello to the bot!')