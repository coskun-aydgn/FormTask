import * as yup from 'yup';
const passwordRulas=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const basicSchema=yup.object().shape({
    email:yup.string().email('Enter a valid email').required('Entering your email is mandatory'),
    age:yup.number().positive('Your age must be positive').integer('Your age must be an integer').min(18,'You must be over 18').required('Entering your age is mandatory'),
    password:yup.string().min(5,'Enter min 5 characters').matches(passwordRulas,{
        message:'Enter at least one uppercase letter, one lowercase letter and a number'
    }).required('Entering your password is mandatory'),
    comfirmPassword:yup.string().oneOf([yup.ref('password')], 'Password does not match').required('Entering your password is mandatory')
})