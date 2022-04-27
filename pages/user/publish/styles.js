import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.pallet.background.white,
        padding: theme.spacing(3),
        marginTop: 50,
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


export default useStyles