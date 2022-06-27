export const changeFormatLargeChat = (answers, contactData) => {
  const chatAnswers = {};
  chatAnswers.serviceName = answers[0].answer[0];
  chatAnswers.lineOfBusiness = answers[1].answer[0];
  chatAnswers.goals = answers[2].answer[0];
  chatAnswers.termsOfWork = answers[3].answer[0];

  return { ...chatAnswers, ...contactData };
};
