import * as Yup from 'yup';

const validator = Yup.object({
  title: Yup.string()
    .required('Please provide a title'),
  description: Yup.string(),
  deadlineDate: Yup.date().nullable()
    .min(new Date(), 'You must use a future date'),
  important: Yup.boolean().required(),
});

export default validator;
