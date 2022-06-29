import * as Yup from 'yup';
import { re } from 'constants';

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
  tags: Yup.array()
    .of(Yup.string().matches(
      re.tagsValidation,
      'Tag is invalid, please ensure you only use letters A-Z or the following special characters: . \' # -'
    )).ensure()
});

export default validator;
