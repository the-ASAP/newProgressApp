// module.exports = ({ env }) => ({
//   // ...
//   email: {
//     config: {
//       provider: "mailgun",
//       providerOptions: {
//         key: "fbf9a9018a5c76f6d44d9f003436e785-4f207195-4885e80b", // Required
//         domain: "sandbox1f23875e60e14a9c80aa5e68e30d7bdb.mailgun.org", // Required
//         url: env("MAILGUN_URL", "https://api.mailgun.net"), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
//       },
//       settings: {
//         defaultFrom: "strapi91@gmail.com",
//         defaultReplyTo: "pavelgorazio91@gmail.com",
//       },
//     },
//   },
//   // ...
// });

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-sendinblue",
      providerOptions: {
        sendinblue_api_key:
          "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",
        sendinblue_default_replyto: "tatyana.solovva@bk.ru",
        sendinblue_default_from: "strapi91@gmail.com",
        sendinblue_default_from_name: "Ivan",

        // auth: {
        //   user: "pavelgorazio91@gmail.com",
        //   pass: "rT8XN4m7OM5QkZtd",
        // },

        // host: "smtp-relay.sendinblue.com",
        // port: 587,
      },
    },
  },
});
