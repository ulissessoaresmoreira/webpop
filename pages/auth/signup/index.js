import {Formik} from 'formik'

import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Typography
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'

import {initialValues, validationSchema} from './formValues'
import useStyles from './styles'


const SignUp = () => {
    const classes = useStyles()      

    return (
        <>
            <TemplateDefault>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('enviado', values)
                    }}
                >
                    {
                        ({
                            touched,
                            values,
                            errors,
                            handleChange,
                            handleSubmit,                            
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
                                            <FormControl fullWidth error={errors.name && touched.name} className={classes.formControl}>
                                                <InputLabel>Nome</InputLabel>
                                                <Input 
                                                    name="name"
                                                    values={values.name}
                                                    onchange={handleChange}
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
                                                    onchange={handleChange}
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
                                        <Button type="submit" variant="contained" color="primary" className={classes.buttonRegister} fullWidth>CADASTRAR</Button>
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