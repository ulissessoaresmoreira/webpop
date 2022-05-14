import {Formik} from 'formik'
import Image from 'next/image'
import axios from 'axios'
import {useRouter} from 'next/router'
import { useSession, signIn } from "next-auth/react"


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
import { Alert } from '@mui/material'



const Signin = () => {
    const classes = useStyles()
    const router = useRouter()
    const {setToasty} = useToasty()
    
    const { data: getSession } = useSession()
    
    console.log(getSession)    

    const handleGoogleLogin = () => {
        signIn('google',{callbackUrl: 'http://localhost:3000/user/dashboard'})}
    
        const handleFormSubmit = async values => {
            signIn('credentials',{
                email: values.email,
                password: values.password,
                callbackUrl: 'http://localhost:3000/user/dashboard'                 
            })
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
                                    {
                                        router.query.i === '1'
                                        ? (
                                            <Alert severity="error" className={classes.errorMessagem}>
                                                Usuário ou senha inválidos
                                            </Alert>
                                        )
                                        : null
                                    }                               
                                    <Container maxWidth="sm" className={classes.title}>
                                        <Typography constant="h2" variant="h2" align="center" color="textPrimary">Aceda sua conta</Typography>
                                    </Container>                                    
                                    
                                    <Container maxWidth="md" className={classes.box}>
                                        <Box className={classes.buttonGoogle}>
                                            <Button 
                                                variant='contained'
                                                color='primary'
                                                startIcon={
                                                    <Image 
                                                        src="/images/google.jpg"
                                                        width={20}
                                                        height={20}
                                                        alt="Login google"
                                                    />
                                                }
                                                onClick={handleGoogleLogin}>
                                                Entrar com Google
                                            </Button>
                                        </Box>

                                        <Box className={classes.orSeparator}>
                                            <span>ou</span>
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
                                                    ENTRAR
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



export default Signin