import { Box, IconButton, Typography } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { useDropzone } from 'react-dropzone'

import useStyles from './styles'

const FileUpload = ({ files, errors, touched, setFieldValue}) => {
    const classes = useStyles()

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) =>{
            const newFiles = acceptedFile.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
            }))
            
            setFieldValue('files', [
                ...files,
                ...newFiles,
            ])
        }
    })

    const handleRemoveFile = fileName => {        
        const newFileState = files.filter(file => file.name !== fileName)
        setFieldValue('files', newFileState)
    }

    return (
        <>
            <Typography component="h6" variant="h6" align="left" color={errors && touched? 'error': 'text'}>
                Imagens
            </Typography>
            <Typography component="div" variant="body2" align="left" color={errors && touched? 'error': 'text'}>
                A primeira imagem é a foto principal do seu anúncio. Arrasta e larga imagens para alterares a ordem.
            </Typography>                                            
            {
                errors && touched
                ?<Typography variant="body2" color="error" gutterBottom>{errors}</Typography>
                : null
            }
            <Box className={classes.thumbsContainer}>
                <Box className={classes.dropzone} {...getRootProps()}>
                    <input name="files" {...getInputProps()} />
                    <Typography variant="body2" color={errors && touched? 'error': 'text'} >
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
                                <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                    <DeleteForever fontSize='large'/>
                                </IconButton>
                            </Box>
                    </Box>
                    ))
                }                            
            </Box>
        </>
    )
}

export default FileUpload