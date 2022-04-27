
import * as yup from 'yup'


const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    email: '',
    name: '',
    phone: '',
    files: [],    
}

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Digite pelo menos 6 caracteres')
        .max(100, 'Digite no máximo 100 caracteres')
        .required('Campo obrigatório'),
    category: yup.string()
        .required('Campo obrigatório'),
    description: yup.string()
        .min(50, 'Digite pelo menos 50 caracteres')        
        .required('Insira uma descrição para o anúncio'),
    price: yup.number()
        .required('Campo obrigatório'),
    email: yup.string()
        .email('Digite um e-mail válido')
        .required('Campo obrigatório'),
    name: yup.string()
        .required('Campo obrigatório'),
    phone: yup.number()
        .required('Campo obrigatório'),
    files: yup.array()
        .min(1, 'Insira pelo menos uma imagem')
        .required('Campo obrigatório'),
    
})

export {
    initialValues,
    validationSchema,
}
