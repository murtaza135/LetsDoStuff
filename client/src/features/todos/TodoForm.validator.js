import * as Yup from 'yup';

const getYesterdaysDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
};

const validator = Yup.object({
  title: Yup.string()
    .required('Please provide a title'),
  description: Yup.string(),
  deadlineDate: Yup.date().nullable()
    .min(getYesterdaysDate(), 'You must use a future date'),
  important: Yup.boolean().required(),
});

export default validator;
