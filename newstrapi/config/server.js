module.exports = ({ env }) => ({
  host: env('45.147.178.155'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
