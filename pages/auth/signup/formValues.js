import * as yup from 'yup'

const initialValues = {
    userNamer: '',
    email: '',
    password: '',
    confirmpassword: ''
}

const validationSchema = yup.object().shape({
    userName: yup.string()
        .required('Campo Obrigatório'),
    email: yup.string()
        .email()
        .required('Digite um e-mail válido'),
    password: yup.string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Campo Obrigatório'),
    confirmpassword: yup.string()
        .required('Campo Obrigatório')
        .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais'),

})



export {
    initialValues,
    validationSchema,
}