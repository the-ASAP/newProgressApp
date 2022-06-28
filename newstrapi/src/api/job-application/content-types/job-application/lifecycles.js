module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "hello@progressapp.ru",
        from: "strapi91@gmail.com",
        subject: "Заявка на вакансию",
        html: `
        <table>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px; background-color: #30d96e">
            <strong style="font-size: 20px; display: block">Название вакансии:</strong><br />${result.vacancy}
          </td>
        </tr>

        <tr>
          <td style="border: 1px solid #000000; padding: 20px; background-color: #30d96e">
            <strong style="font-size: 20px; display: block"
              >Имя:</strong
            ><br />${result.userName}
          </td>
        </tr>

        <tr>
          <td style="border: 1px solid #000000; padding: 20px; background-color: #30d96e">
            <strong style="font-size: 20px; display: block">Ссылка на резюме:</strong><br />
            <a href="${result.resumeUrl}">${result.resumeUrl}</a>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000000; padding: 20px; background-color: #30d96e">
            <strong style="font-size: 20px; display: block">Email:</strong><br />
            ${result.email}
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
