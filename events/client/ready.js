const { prefix } = require(`../../botconfig/config.json`);

module.exports = async (client) => {
	const botStatus = [
		`${client.commands.size} Commands`,
		`${client.users.cache.size} Users`,
		`${client.guilds.cache.size} Servers`,
	];

	setInterval(function() {
		const status = botStatus[Math.floor(Math.random() * botStatus.length)];
		client.user.setActivity(`${prefix}help | ${status}`, { type: 'PLAYING' });
	}, 30000);

	console.log(`Logged in as ${client.user.tag}`);
	console.log('Prefix:', prefix);
};