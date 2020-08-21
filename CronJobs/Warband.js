const cron = require('cron');
var CronJob = cron.CronJob;

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

module.exports = {
  training30NW,
  trainingNW,
  eventNW
};