import { useState } from 'react'

import {
    Box,
    Button,
    Container,
    IconButton,
    Select,
    TextField,
    Typography 
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    
    mask: {},
    container: {
        padding: theme.spacing(8, 0, 6)
    },
    box: {
        backgroundColor: theme.pallet.background.white,
        padding: theme.spacing(3),
    },
    boxContainer: {
        paddingBottom: theme.spacing(3)
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
}))

const Publish = () =>{
    const classes = useStyles()
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) =>{
            const newFiles = acceptedFiles.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })
            
            setFiles([
                ...files,
                ...newFiles,
            ])
        }
    })

    return(
        <>
            <TemplateDefault>
                <Container maxWidth="sm" className={classes.container}>
                    <Typography component="h1" variant="h2" align="center" color="textprimary">
                        Publicar Anúncio
                    </Typography>
                    <Typography component="h5" variant="h5" align="center" color="textprimary">
                        Quanto mais detalhado, melhor!
                    </Typography>

                </Container>
                <Container maxWidth="md" className={classes.boxContainer}>
                    <Box className={classes.box}>
                        <Typography component="h6" variant="h6" align="left" color="textprimary">
                            Título do anuncio
                        </Typography>
                        <TextField 
                            label="ex.: Bicicleta aro 22 com garantia"
                            size="small"
                            fullWidth
                        />
                        <br /><br />
                        <Typography component="h6" variant="h6" align="left" color="textPrimary">
                            Categoria
                        </Typography>
                        <Select 
                            native
                            value=""
                            fullWidth
                            onChange={() => {}}
                            inputProps={{
                                name: 'age',
                            }}
                        >
                            <option value="">Selecione</option>
                            <option value={1}>Bebê e Criança</option>
                            <option value={2}>Agricultura</option>
                            <option value={3}>Moda</option>
                            <option value={4}>Carros, Motos e Barcos</option>
                            <option value={5}>Serviços</option>
                            <option value={6}>Lazer</option>
                            <option value={7}>Animais</option>
                            <option value={8}>Móveis, Casa e Jardim</option>
                            <option value={9}>Imóveis</option>
                            <option value={10}>Equipamentos e Ferramentas</option>
                            <option value={11}>Telemóveis e Tablets</option>
                            <option value={12}>Desporto</option>
                            <option value={13}>Tecnologia</option>
                            <option value={14}>Emprego</option>
                            <option value={15}>Outros</option>
                        </Select>
                    </Box>
                </Container>
                <Container maxWidth="md" className={classes.boxContainer}>
                    <Box className={classes.box}>
                        <Typography component="h6" variant="h6" align="left" color="textPrimary">
                            Imagens
                        </Typography>
                        <Typography component="div" variant="body2" align="left" color="textPrimary">
                            A primeira imagem é a foto principal do seu anúncio. Arrasta e larga imagens para alterares a ordem.
                        </Typography>
                        <Box className={classes.thumbsContainer}>
                            <Box className={classes.dropzone} {...getRootProps()}>
                                <input {...getInputProps()} />
                                <Typography variant="body2" color="textPrimary" >
                                    Adicionar Imagem
                                </Typography>
                            </Box>

                            {
                                files.map((file, index) => (
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
                                            <IconButton color="secondary">
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
                        <Typography component="h6" variant="h6" align="left" color="textPrimary">
                            Descrição
                        </Typography>
                        <Typography component="div" variant="body2" align="left" color="textPrimary">
                            Escreva os detalhes do seu anúncio
                        </Typography>
                        <TextField
                            multiline
                            rows={6}
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                    <Box className={classes.box}>
                        <Typography component="h6" variant="h6" align="left" color="textPrimary" gutterBottom>
                            Dados de contacto
                        </Typography>
                        <TextField
                            label="Nome"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <br/><br/>                        
                        <TextField
                            label="e-mail"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <br/><br/>
                        <TextField 
                            label="Telefone"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                    <Box textAlign="left" >
                        <Button variant="contained" color="primary">
                            Publicar Anúncio
                        </Button>
                    </Box>
                </Container>
            </TemplateDefault>
        </>
    )
}

export default Publish