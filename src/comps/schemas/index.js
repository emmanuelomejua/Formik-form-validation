import * as yup from 'yup';

//const passwordRules = /^(?=.*\d)(?=.[a-z])(?=.*[A-Z]){5,}$/
// minimum of 5 charcters, 1 upperCase, 1 lowerCase & 1 numeric digit

export const basicSchema = yup.object({
    email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
    age: yup
    .number()
    .integer()
    .positive('Age must a positive integer')
    .required('Required'),
    password: yup
        .string()
        .min(5, 'Please use a stronger password')
        .required('Required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref(`password`)], 'Confirm password & Pasword must match')
        .required()
    
})


export const advancedSchema = yup.object({
    username: yup
        .string()
        .min(4, 'Username must be at least 4 characters')
        .required(),
    jobType: yup
        .string()
        .oneOf(['designer', 'developer', 'editor', 'others'])
        .required(),
    acceptedTos: yup
        .boolean()
        .oneOf([true], 'Please accept the terms of services')
 })
