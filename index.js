const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ disableMentions: 'everyone', partials: ['MESSAGE', 'CHANNEL', 'REACTION'], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES]});
const {token} = require(`./botconfig/config.json`)

client.commands = new Collection();
client.aliases = new Collection();

['command', 'event'].forEach(handler => {
	require(`./handler/${handler}`)(client);
});

client.login(token);