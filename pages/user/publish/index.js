import { Formik } from 'formik'

import {
    Box,
    Button,
    Container,
    FormControl,    
    FormHelperText, 
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,    
    Typography, 
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'

import useStyles from './styles'
import {initialValues, validationSchema} from './formValues'
import FileUpload from '../../../src/components/fileUpload'


const Publish = () =>{
    const classes = useStyles()  

    return(
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
                            setFieldValue,
                        }) => {
                            
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            
                            

                            return(
                                <form onSubmit={handleSubmit}>                            
                                    <Container maxWidth="sm">
                                        <Typography component="h1" variant="h2" align="center" color="textprimary">
                                            Publicar Anúncio
                                        </Typography>
                                        <Typography component="h5" variant="h5" align="center" color="textprimary">
                                            Quanto mais detalhado, melhor!
                                        </Typography>

                                    </Container>


                                    <Container maxWidth="md" className={classes.boxContainer}>
                                        <Box className={classes.box}>

                                            <FormControl error={errors.title && touched.title} fullWidth>    
                                                <InputLabel className={classes.inputLabel}>Título do anuncio</InputLabel>                                                
                                                <Input 
                                                    name="title"
                                                    values={values.title}
                                                    onChange={handleChange}
                                                />                                            
                                                <FormHelperText>
                                                    {errors.title && touched.title? errors.title: null}                                                    
                                                </FormHelperText>
                                            </FormControl>

                                            <br/><br/>

                                            
                                            <FormControl error={errors.category && touched.category} fullWidth>
                                                <InputLabel className={classes.inputLabel}> Categoria</InputLabel>
                                                <Select 
                                                    name="category"
                                                    values={values.category}
                                                    fullWidth                                                    
                                                    onChange={handleChange}                                                   
                                                    >                                                    
                                                    <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                                                    <MenuItem value="Agricultura">Agricultura</MenuItem>
                                                    <MenuItem value="Moda">Moda</MenuItem>
                                                    <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                                                    <MenuItem value="Serviços">Serviços</MenuItem>
                                                    <MenuItem value="Lazer">Lazer</MenuItem>
                                                    <MenuItem value="Animais">Animais</MenuItem>
                                                    <MenuItem value="Móveis, Casa e Jardim">Móveis, Casa e Jardim</MenuItem>
                                                    <MenuItem value="Imóveis">Imóveis</MenuItem>
                                                    <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                                    <MenuItem value="Telemóveis e Tablets">Telemóveis e Tablets</MenuItem>
                                                    <MenuItem value="Desporto">Desporto</MenuItem>
                                                    <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                                    <MenuItem value="Emprego">Emprego</MenuItem>
                                                    <MenuItem value="Outros">Outros</MenuItem>
                                                </Select>
                                                <FormHelperText>
                                                    {errors.category && touched.category? errors.category: null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>

                                    </Container>


                                    <Container maxWidth="md" className={classes.boxContainer}>
                                        <Box className={classes.box}>
                                            
                                            <FileUpload 
                                                files={values.files}
                                                errors={errors.files}
                                                touched={touched.files}
                                                setFieldValue={setFieldValue}
                                            />
                                            
                                        </Box>
                                    </Container>

                                    <Container maxWidth="md" className={classes.boxContainer}>
                                        <Box className={classes.box}>
                                            
                                            <FormControl error={errors.description && touched.description} fullWidth>                                                
                                                <InputLabel className={classes.inputLabel}>Escreva os detalhes do seu anúncio</InputLabel>
                                                <Input
                                                    name="description"
                                                    onChange={handleChange}
                                                    multiline
                                                    rows={6}                                                    
                                                />
                                                <FormHelperText>
                                                    {errors.description && touched.description? errors.description: null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container maxWidth="md" className={classes.boxContainer}>
                                        <Box className={classes.box}>
                                            <FormControl error={errors.price && touched.price} fullWidth>
                                            <InputLabel className={classes.titlePrice}>
                                                Preço de venda
                                            </InputLabel>   
                                            <br/>
                                            <Input
                                                name="price"
                                                onChange={handleChange}
                                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                                labelWidth={40}
                                            />
                                            <FormHelperText>
                                                {errors.price && touched.price? errors.price: null}
                                            </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container maxWidth="md" className={classes.boxContainer}>
                                        <Box className={classes.box}>

                                        <FormControl error={errors.name && touched.name} fullWidth>
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
                                                <br/><br/>
                                            </FormControl>

                                            <FormControl error={errors.email && touched.email} fullWidth>
                                                <InputLabel>
                                                    E-mail
                                                </InputLabel>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    onChange={handleChange}
                                                    />
                                                <FormHelperText>
                                                    {errors.email && touched.email? errors.email: null}
                                                </FormHelperText>
                                                <br/><br/>
                                            </FormControl>

                                            <FormControl error={errors.phone && touched.phone} fullWidth>
                                                <InputLabel>
                                                    Número de contacto
                                                </InputLabel>
                                                <Input
                                                    name="phone"
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.phone && touched.phone? errors.phone: null}
                                                </FormHelperText>
                                            </FormControl>

                                        </Box>
                                    </Container>

                                    <Container maxWidth="md" className={classes.boxContainer}>
                                        <Box textAlign="left" >
                                            <Button type='submit' variant="contained" color="primary">
                                                Publicar Anúncio
                                            </Button>
                                        </Box>
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

Publish.requireAuth = true

export default Publish