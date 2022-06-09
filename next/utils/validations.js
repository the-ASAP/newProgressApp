import * as Yup from 'yup';

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

export const BriefValidationSchema = Yup.object().shape({
  userName: Yup.string().required('Поле обязательно *'),
  phone: Yup.string().required('Поле обязательно *').min(10, 'to short').matches(phoneRegExp),
  email: Yup.string().required('Поле обязательно *').email()
});
