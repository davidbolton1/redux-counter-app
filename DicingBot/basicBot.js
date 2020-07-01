const Discord = require('discord.js');

//const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  const messageWords = message.content.split(' ');
  const rollFlavor = messageWords.slice(2).join(' ');
  if (messageWords[0] === '!roll') {
    if (messageWords.length === 1) {
      // !roll
      let response = (Math.floor(Math.random() * 6) + 1) + ' ' + rollFlavor

      return message.reply(
        `You have rolled a ${response}!`
      );
    }
  }
});

client.login('NzI3OTkyNzA4ODkwNzU1MDgz.Xvz6gA.UuuOC6SOG5gq_aiKKw5nBMc3ewo')
//client.login(config.token);