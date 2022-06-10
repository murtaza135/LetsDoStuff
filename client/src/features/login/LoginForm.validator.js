import * as Yup from 'yup';
import { re } from 'constants';

const validator = Yup.object({
  username: Yup.string()
    .matches(re.alphaNumericUnderscoresDashes, 'Please provide a valid username')
    .required('Please provide a valid username'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .trim('Please provide a valid password')
    .required('Please provide a valid password')
});

export default validator;
