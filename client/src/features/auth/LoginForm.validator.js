import * as Yup from 'yup';

const ALPHA_NUMERIC_UNDERSCORES_DASHES = /^[a-zA-Z0-9_-]*$/i;

const validator = Yup.object({
  username: Yup.string()
    .matches(ALPHA_NUMERIC_UNDERSCORES_DASHES, 'Please provide a valid username')
    .required('Please provide a valid username'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .trim('Please provide a valid password')
    .required('Please provide a valid password')
});

export default validator;
