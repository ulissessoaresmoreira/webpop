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
        marginTop: 40
    }
    
}))

export default useStyles