import * as Yup from 'yup';

export const BriefValidationSchema = Yup.object().shape({
  title: Yup.string().required('Поле обязательно *'),
  functional: Yup.string().required('Поле обязательно *'),
  services: Yup.array().min(1, 'выберите минимум один вариант *')
});
