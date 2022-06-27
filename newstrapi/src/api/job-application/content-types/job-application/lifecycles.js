module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      console.log("result SEND!!!!!! ", result);
      await strapi.plugins["email"].services.email.send({
        to: "tatyana.solovva@bk.ru",
        from: "strapi91@gmail.com",
        subject: "Use  successfully",
        text: `имя: ${result.userName}, вакансия: ${result.vacancy}, ссылка на резюме: ${result.resumeUrl}, email: ${result.email}`,
      });
    } catch (error) {
      console.log('strapi.plugins["email"] ERROR ', error);
    }
  },
};
