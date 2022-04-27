import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    
    mask: {},
    container: {
        padding: theme.spacing(8, 0, 6),        
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


export default useStyles