import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    title:{
        marginTop: 50
    },
    subTitle:{
        marginBottom: 50
    },

    boxContainer: {
        padding: theme.spacing(8, 0, 6),
        marginTop: 10
        
    },
    box:{
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

    }
    
}))

export default useStyles