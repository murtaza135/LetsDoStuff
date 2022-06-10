import * as Yup from 'yup';
import { re } from 'constants';

const equalTo = (fieldName, msg) => Yup.mixed().oneOf([Yup.ref(fieldName)], msg);
Yup.addMethod(Yup.mixed, 'equalTo', equalTo);

const validator = Yup.object({
  name: Yup.string()
    .required('Please provide a name'),
  email: Yup.string()
    .email('Please provide a valid email')
    .required('Please provide a valid email'),
  username: Yup.string()
    .matches(re.alphaNumericUnderscoresDashes, 'Please provide a valid username')
    .required('Please provide a valid username'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .trim('Please provide a valid password')
    .required('Please provide a valid password'),
  confirmPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .trim('Please provide a valid password')
    .equalTo('password', 'Passwords do not match')
    .required('Please provide a valid password')
});

export default validator;
