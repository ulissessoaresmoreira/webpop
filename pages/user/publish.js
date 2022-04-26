import { Formik } from 'formik'
import * as yup from 'yup'

import {
    Box,
    Button,
    Container,
    FormControl,    
    FormHelperText,    
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,    
    Typography, 
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    
    mask: {},
    container: {
        padding: theme.spacing(8, 0, 6),        
    },
    box: {
        backgroundColor: theme.pallet.background.white,
        padding: theme.spacing(3),
        marginTop: 50,
    },    
    thumbsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 15,        
    },
    dropzone: {
        display: 'flex,',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        margin: '0 15px 15px 0',
        width: 200,
        height: 150,
        backgroundColor: theme.pallet.background.default,
        border: '2px dashed black',        
    },
    thumb: {
        position: 'relative',
        margin: '0 15px 15px 0',
        width: 200,
        height: 150,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

        '&:hover $mask': {
            display: 'flex',            
        },

        '& $mask':{
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',            
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: '100%',
            height: '100%',
        },
    
    },
    mainImage: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        backgroundColor: 'blue',
        padding: '5px 8px',
        color:'white',        
    },
    titlePrice:{
        marginBottom: -30,        
    },
    price:{
        margin: '14px'
    },
    inputLabel: {
        fontWeight: 600,
        color: theme.pallet.primary.main,
    },  
}))

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
        .required('Campo obrigatório')
})

const Publish = () =>{
    const classes = useStyles()  

    return(
        <>
            <TemplateDefault>
                <Formik
                    initialValues={{
                        title: '',
                        category: '',
                        description: '',
                        price: '',
                        email: '',
                        name: '',
                        phone: '',
                        files: [],
                    }}
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
                            const { getRootProps, getInputProps } = useDropzone({
                                accept: 'image/*',
                                onDrop: (acceptedFiles) =>{
                                    const newFiles = acceptedFiles.map(file => {
                                        return Object.assign(file, {
                                            preview: URL.createObjectURL(file)
                                        })
                                    })
                                    
                                    setFieldValue('files', [
                                        ...values.files,
                                        ...newFiles,
                                    ])
                                }
                            })
                        
                            const handleRemoveFile = fileName => {
                                const newFileState = values.files.filter(file => file.name !== fileName)
                                setFieldValue('files', newFileState)
                            }
                            

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
                                            
                                            <Typography component="h6" variant="h6" align="left" color={errors.files && touched.files? 'error': 'text'}>
                                                Imagens
                                            </Typography>
                                            <Typography component="div" variant="body2" align="left" color={errors.files && touched.files? 'error': 'text'}>
                                                A primeira imagem é a foto principal do seu anúncio. Arrasta e larga imagens para alterares a ordem.
                                            </Typography>                                            
                                            {
                                                errors.files && touched.files
                                                ?<Typography variant="body2" color="error" gutterBottom>{errors.files}</Typography>
                                                : null
                                            }
                                            <Box className={classes.thumbsContainer}>
                                                <Box className={classes.dropzone} {...getRootProps()}>
                                                    <input name="files" {...getInputProps()} />
                                                    <Typography variant="body2" color={errors.files && touched.files? 'error': 'text'} >
                                                        Adicionar Imagem
                                                    </Typography>
                                                </Box>

                                                {
                                                    values.files.map((file, index) => (
                                                        <Box 
                                                        key={file.name}
                                                        className={classes.thumb}
                                                        style={{backgroundImage: `url(${file.preview})` }}
                                                        >
                                                            {
                                                                index === 0 ?
                                                                <Box className={classes.mainImage}>
                                                                        <Typography variant="body2" >Principal</Typography>
                                                                    </Box>
                                                                : null
                                                            }
                                                            <Box className={classes.mask}>
                                                                <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                                                    <DeleteForever fontSize='large'/>
                                                                </IconButton>
                                                            </Box>
                                                        </Box>
                                                    ))
                                                }                            
                                            </Box>
                                            
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
                                                    fullWidth
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

export default Publish