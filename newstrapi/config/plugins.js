// module.exports = ({ env }) => ({
//   // ...
//   email: {
//     config: {
//       provider: "mailgun",
//       providerOptions: {
//         key: "", // Required
//         domain: "", // Required
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
        sendinblue_api_key:'',
,          
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
