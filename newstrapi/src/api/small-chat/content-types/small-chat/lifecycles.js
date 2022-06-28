module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "hello@progressapp.ru",
        from: "strapi91@gmail.com",
        subject: "Заявка на услугу",
        text: ``,

        html: `
        <table>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px; background-color: #30d96e">
            <strong style="font-size: 20px; display: block">Интересующая услуга:</strong><br />${result.serviceName}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px; background-color: #30d96e">
            <strong style="font-size: 20px; display: block">Номер телефона:</strong><br />
            <a href="tel:${result.phoneNumber}">${result.phoneNumber}</a>
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
