module.exports = ({ env }) => ({
  host: env('HOST', 'https://new.progressapp.ru'),
  port: env.int('PORT', 1337),
  url: 'https://new.progressapp.ru',
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
});
