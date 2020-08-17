require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
// Cron is used to schedule tasks easily
const cron = require('cron');
var CronJob = cron.CronJob;

// const job = cron.job('30 4 * * Fri,Sat,Tue');
// console.log(job.nextDates(5).map((date) => date.toString()));

client.once('ready', () => {
  console.log('Ready!');
});

var job = new CronJob(
  '30 17 * * *',
  function () {
    // console.log('Function called');
    const channel = client.channels.cache.get('745008014758772776');
    channel.send('Training in 30 minutes! @everyone');
  },
  null,
  true,
  'America/Chicago'
);

var job2 = new CronJob(
  '00 18 * * *',
  function () {
    // console.log('Function called');
    const channel = client.channels.cache.get('745008014758772776');
    channel.send('Training has started, hop in teamspeak! @everyone');
  },
  null,
  true,
  'America/Chicago'
);

var job3 = new CronJob(
  '00 19 * * *',
  function () {
    // console.log('Function called');
    const channel = client.channels.cache.get('745008014758772776');
    channel.send('Event has started, hop in teamspeak! @everyone');
  },
  null,
  true,
  'America/Chicago'
);

job.start();
job2.start();
job3.start();

// Login to discord using app token, defaults to process.env.DISCORD_TOKEN
client.login();