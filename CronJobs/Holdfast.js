const cron = require('cron');
var CronJob = cron.CronJob;

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

module.exports = {
  training30HF,
  trainingHF,
  eventHF
};