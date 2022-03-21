module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1d8f299d55545cff6122faa23808d170'),
  },
  url: 'https://new.progressapp.ru/admin'
});
