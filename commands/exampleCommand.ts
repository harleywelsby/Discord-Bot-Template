import { SlashCommandBuilder } from '@discordjs/builders';

// Command to be added to the commands list in main.ts, callable with /
export const exampleCommand = new SlashCommandBuilder()
    .setName('examplecommand')
    .setDescription('Say hello to the bot!')

// Function to call when command is entered in Discord
export const doCommand = (interaction: any) => {
    const author = interaction.member.user;
    interaction.reply(`Hello ${author}!`);
} 