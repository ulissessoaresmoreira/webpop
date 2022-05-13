import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    title:{
        marginTop: 50, 
    },
    subTitle:{
        marginBottom: 50
    },

    boxContainer: {
        padding: theme.spacing(8, 0, 6),
        marginTop: 10
        
    },
    box:{
        marginTop: 30,
        backgroundColor: theme.pallet.background.white,
        padding: theme.spacing(3),
    },
    buttonRegister:{
        margin: theme.spacing(3, 0, 2),
    },
    formControl:{
        margin: theme.spacing(2)
    },
    loading: {
        display: 'block',
        margin: '10px auto'
    },
    errorMessage: {
        margin: '20px 0'
    },
    orSeparator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
        width: '100%',
        height: 1,
        margin: theme.spacing(7,0,4),

        '& span': {
            backgroundColor: 'white',
            padding: '0 30px',
        }
    },
    buttonGoogle: {
        display: 'flex',
        justifyContent: 'center',
    }
    
}))

export default useStyles