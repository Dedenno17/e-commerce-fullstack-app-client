import * as yup from 'yup';

const passwordRules = /(^[A-Z](\w+\d+$|\w+\d+\w+$|\d+\w+$))/g;
// Only less than 8 character, must be include capital at begining and number

// regis schema
export const regisSchema = yup.object().shape({
  username: yup.string().min(2).required('Required'),
  email: yup.string().email('Please enter a valid email!').required('Required'),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'password must match')
    .required('Required'),
  acceptance: yup.boolean().oneOf([true], 'Please accept the terms of service'),
});
