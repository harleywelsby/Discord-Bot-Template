# Discord-Bot-TypeScript-Template
TypeScript template for Discord Bot development with Discord.js

# How to Use This Template

* Fork the repository and rename 'config/config.example.json' to 'config/config.json'. From here you can plug in the Token and ClientId, which are required for starting the bot and creating slash commands. You can get these values by creating a new application here: https://discord.com/developers

* Run 'npm i' in the root directory, and you should be able to start the bot with 'npm run bot'!

* To add new commands, update 'commands/commandRegister.ts' with your new slash command info, as seen in the example on lines 25-27. For more info on commands like adding arguments, see the Discord.js documentation here: https://discordjs.guide/slash-commands/advanced-creation.html

* Once you've added a new slash command, you'll also need to update the switch case in 'commands/commandRegister.ts' to tell the bot what it should do when your command is called. See the example of this on lines 15-17.
