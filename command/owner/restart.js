const owner = require(`../../botconfig/config.json`);
const {token} = require(`../../botconfig/config.json`)

module.exports = {
	name: 'restart',
	category: 'Owner',
	description: 'Restarts the bot.',
	aliases: ['reload'],
	usage: 'restart',
	userperms: ['BOT_OWNER'],
	botperms: ['USE_EXTERNAL_EMOJIS'],
	run: async (client, message, args) => {
		try {
			message.channel.send('⚙ Restarting...').then(msg => msg.delete({ timeout: 300 }))
				.then(() => client.destroy())
				.then(() => client.login(token))
				.then(() => message.channel.send('Restart Successful'));
		}
		catch (e) {
			return message.channel.send(
				'An error occurred, please try again!',
			);
		}
	},
};