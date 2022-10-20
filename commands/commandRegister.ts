import { SlashCommandBuilder } from '@discordjs/builders';

// Command to be added to the commands list in main.ts, callable with /
export const thingCommand = new SlashCommandBuilder()
    .setName('cooltestcommand')
    .setDescription('Say hello to the bot!')

export const coolCommand = new SlashCommandBuilder()
    .setName('coolertestcommand')
    .setDescription('Say hello to the bot!')