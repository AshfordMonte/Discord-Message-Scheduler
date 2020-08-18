require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('cron');
var CronJob = cron.CronJob;

const id = '745065572055777391';

client.once('ready', () => {
  console.log('Ready!');
});

var training30HF = new CronJob(
  '30 17 * * Fri,Tue',
  function () {
    const channel = client.channels.cache.get(id);
    channel.send('Holdfast Training in 30 minutes! Join teamspeak by then @everyone');
  },
  null,
  true,
  'America/Chicago'
);

var trainingHF = new CronJob(
  '00 18 * * Fri,Tue',
  function () {
    const channel = client.channels.cache.get(id);
    channel.send('Holdfast Training has started! Join teamspeak @everyone');
  },
  null,
  true,
  'America/Chicago'
);

var eventHF = new CronJob(
  '00 19 * * Fri,Tue',
  function () {
    const channel = client.channels.cache.get(id);
    channel.send('Holdfast Event has started! Join teamspeak @everyone');
  },
  null,
  true,
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

training30HF.start();
trainingHF.start();
eventHF.start();
training30NW.start();
trainingNW.start();
eventNW.start();

// Login to discord using app token, defaults to process.env.DISCORD_TOKEN
client.login();