require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('cron');
var CronJob = cron.CronJob;

const id = '745065572055777391';

const { Holdfast, Warband } = require('./CronJobs');

client.once('ready', () => {
  console.log('Ready!');
});

// training30HF.start();
// trainingHF.start();
// eventHF.start();
// training30NW.start();
// trainingNW.start();
// eventNW.start();

// Login to discord using app token, defaults to process.env.DISCORD_TOKEN
client.login();