require('dotenv').config();
const Discord = require('discord.js');
var client = new Discord.Client();
const cron = require('cron');
var CronJob = cron.CronJob;

const prefix = '!';

var id = '';

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', async message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // We check to see who typed the message since they must be an admin
  const member = message.member;

  if (member.roles.cache.some(role => role.name === 'Officers/NCOs')) {

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // console.log(command);

    switch (command) {
      case 'detect': detectChannel(message.channel);
        break;

      default: message.channel.send('Sorry, that is not a valid command!');
        break;
    }
  }
});

function detectChannel(channel) {
  id = channel.id;
  console.log(`New id = ${id}`);

  channel.send('Channel detected! Announcements are good to go.');

  training30HF.start();
  trainingHF.start();
  eventHF.start();
  training30NW.start();
  trainingNW.start();
  eventNW.start();
}

var training30HF = new CronJob(
  '54 4 * * Fri,Tue',
  function () {
    const channel = client.channels.cache.get(id);
    channel.send('Holdfast Training in 30 minutes! Join teamspeak by then @everyone');
  },
  null,
  false,
  'America/Chicago'
);

var trainingHF = new CronJob(
  '00 18 * * Fri,Tue',
  function () {
    const channel = client.channels.cache.get(id);
    channel.send('Holdfast Training has started! Join teamspeak @everyone');
  },
  null,
  false,
  'America/Chicago'
);

var eventHF = new CronJob(
  '00 19 * * Fri,Tue',
  function () {
    const channel = client.channels.cache.get(id);
    channel.send('Holdfast Event has started! Join teamspeak @everyone');
  },
  null,
  false,
  'America/Chicago'
);

var training30NW = new CronJob(
  '30 17 * * Sat',
  function () {
    const channel = client.channels.cache.get(id);
    channel.send('Warband NW Training in 30 minutes! Join teamspeak by then @everyone');
  },
  null,
  true,
  'America/Chicago'
);

var trainingNW = new CronJob(
  '00 18 * * Sat',
  function () {
    const channel = client.channels.cache.get(id);
    channel.send('Warband NW Training has started! Join teamspeak @everyone');
  },
  null,
  true,
  'America/Chicago'
);

var eventNW = new CronJob(
  '00 19 * * Sat',
  function () {
    const channel = client.channels.cache.get(id);
    channel.send('Warband NW Event has started! Join teamspeak @everyone');
  },
  null,
  true,
  'America/Chicago'
);

// Login to discord using app token, defaults to process.env.DISCORD_TOKEN
client.login();