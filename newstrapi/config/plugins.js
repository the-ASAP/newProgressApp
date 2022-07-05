module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-sendinblue",
      providerOptions: {
        sendinblue_api_key: env("SIB_API_KEY"),

        sendinblue_default_replyto: 'hello@progressapp.ru',
        sendinblue_default_from: 'strapi91@gmail.com',
        sendinblue_default_from_name: 'progressApp',
      },
    },
  },
});
