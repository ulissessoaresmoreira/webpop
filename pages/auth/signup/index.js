import {Formik} from 'formik'
import axios from 'axios'
import {useRouter} from 'next/router'

import {
    Box,
    Button,
    CircularProgress,
    Container,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Typography
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'

import {initialValues, validationSchema} from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'


const SignUp = () => {
    const classes = useStyles()
    const router = useRouter()
    const {setToasty} = useToasty()
    
    const handleFormSubmit = async values => {
        const response = await axios.post('/api/users', values)
        console.log(response)

        if (response.data.success) {
            setToasty({
                open: 'true',
                severity: 'success',
                text: 'Cadstro Realizado com sucesso!'
            })
            router.push('/auth/signin')
        }
    }

    return (
        <>
            <TemplateDefault>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    {
                        ({
                            touched,
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            isSubmitting,                            
                        }) => {

                            return(
                                <form onSubmit={handleSubmit}>                                
                                    <Container maxWidth="sm" className={classes.title}>
                                        <Typography constant="h2" variant="h2" align="center" color="textPrimary">Crie sua conta</Typography>
                                    </Container>
                                    <Container className={classes.subTitle}>
                                        <Typography constant="h6" variant="h5" align="center" color="textPrimary">E anuncie para todo país</Typography>
                                    </Container>
                                    <Container maxWidth="md" className={classes.box}>
                                        <Box>

                                            <FormControl error={errors.name && touched.name} fullWidth className={classes.formControl}>
                                                <InputLabel gutterBottom>
                                                    Nome
                                                </InputLabel>
                                                <Input 
                                                    name="name" 
                                                    onChange={handleChange}
                                                    values={values.name} 
                                                />
                                                <FormHelperText>
                                                    {errors.name && touched.name? errors.name: null}
                                                </FormHelperText>
                                            </FormControl>
                                            
                                        </Box>
                                        <Box>
                                            <FormControl fullWidth error={errors.email && touched.email} className={classes.formControl}>
                                                <InputLabel>E-mail</InputLabel>  
                                                <Input 
                                                    name="email"
                                                    type="email"
                                                    values={values.email}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.email && touched.email? errors.email: null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl fullWidth error={errors.password && touched.password} className={classes.formControl}>
                                                <InputLabel> Senha </InputLabel>
                                                <Input
                                                    name="password"
                                                    type="password"
                                                    values={values.password}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.password && touched.password? errors.password: null}
                                                </FormHelperText>                                                
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl fullWidth error={errors.confirmpassword && touched.confirmpassword} className={classes.formControl}>
                                                <InputLabel> Confirme sua senha</InputLabel>
                                                <Input 
                                                    name="confirmpassword"
                                                    type="password"
                                                    values={values.confirmpassword}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.confirmpassword && touched.confirmpassword? errors.confirmpassword: null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>

                                        {
                                            isSubmitting
                                            ? (
                                                <CircularProgress className={classes.loading}/>
                                            ) : (
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.buttonRegister} 
                                                    fullWidth
                                                >
                                                    CADASTRAR
                                                </Button>
                                            )
                                        }
                                        
                                    </Container>
                                </form>
                            )
                        }
                    }   
                </Formik>   
            </TemplateDefault>
        </>
    )
}

export default SignUp