module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://45.147.178.155',
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
});
