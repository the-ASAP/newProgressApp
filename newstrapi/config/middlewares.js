module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:", "https:"],
        }
      }
    }
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:1337', 'http://localhost:3000', 'http://45.147.178.155:3000/', 'http://45.147.178.155:1337/', 'http://45.147.178.155']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
