require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();



client.once('ready', () => {
  console.log('Ready!');
});

// Login to discord using app token, defaults to process.env.DISCORD_TOKEN
client.login();