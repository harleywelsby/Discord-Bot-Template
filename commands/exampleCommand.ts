import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

// Command to be added to the commands list in main.ts, callable with /
export const exampleCommand = new SlashCommandBuilder()
    .setName('examplecommand')
    .setDescription('Say hello to the bot!')

// Function to call when command is entered in Discord
export const doCommand = (interaction: CommandInteraction) => {
    const author = interaction.member.user;
    interaction.reply(`Hello ${author}!`);
} 