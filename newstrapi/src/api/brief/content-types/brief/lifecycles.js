module.exports = {
  async afterCreate(event) {
    const { result } = event;

    console.log(result);

    try {
      await strapi.plugins["email"].services.email.send({
        to: "hello@progressapp.ru",
        from: "strapi91@gmail.com",
        subject: "Заявка с Брифа",
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
            <strong style="font-size: 20px; display: block">Название компании и сфера деятельности:</strong><br />${result.title}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Интересующая услуга:</strong><br />${result.services}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Функционал проекта:</strong><br />${result.functional}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Желаемые сроки:</strong><br />${result.deadline}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Бюджет:</strong><br />${result.budget}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px">
            <strong style="font-size: 20px; display: block">Файл:</strong><br />${result.file}
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
