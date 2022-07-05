module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      console.log("result SEND!!!!!! ", result);
      await strapi.plugins["email"].services.email.send({
        to: "hello@progressapp.ru",
        from: "strapi91@gmail.com",
        subject: "Заявка с Чата 2",
        text: ``,

        html: `
        <table>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Имя:</strong><br />${result.userName}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Название компани:</strong><br />${result.companyName}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Номер телефона:</strong><br />
            <a href="tel:${result.phone}">${result.phone}</a>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Email:</strong><br />
            <a href="mailto:${result.email}">${result.email}</a>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Интересующая услуга:</strong><br />${result.serviceName}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Направление деятельности:</strong><br />${result.lineOfBusiness}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Цели:</strong><br />${result.goals}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Сроки:</strong><br />${result.termsOfWork}
          </td>
        </tr>
      </table>
        `,
      });
    } catch (error) {
      console.log('strapi.plugins["email"] ERROR ', error);
    }
  },
};
