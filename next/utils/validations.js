import * as Yup from 'yup';

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

export const BriefValidationSchema = Yup.object().shape({
  userName: Yup.string().required('Поле обязательно *'),
  phone: Yup.string().required('Поле обязательно *').min(10, 'to short').matches(phoneRegExp),
  email: Yup.string().required('Поле обязательно *').email()
});

export const VacancyValidationSchema = Yup.object().shape({
  vacancy: Yup.string().required('Поле обязательно *'),
  resumeUrl: Yup.string().required('Поле обязательно *'),
  userName: Yup.string().required('Поле обязательно *'),
  email: Yup.string().required('Поле обязательно *').email()
});

export const ChatContactValidationSchema = Yup.object().shape({
  companyName: Yup.string().required('Поле обязательно *'),
  userName: Yup.string().required('Поле обязательно *'),
  email: Yup.string().required('Поле обязательно *').email(),
  phone: Yup.string().required('Поле обязательно *').min(10, 'to short').matches(phoneRegExp)
});
