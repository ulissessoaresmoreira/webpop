import { Snackbar } from "@material-ui/core"
import { Alert } from "@mui/material";



const Toasty = ({open, text, severity, onClose=null}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        if(onClose) onClose()
    }

    return (
        <Snackbar
            anchorOrigin={{ 
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert elevation={6} variant="filled" severity={severity}>
                {text}
            </Alert>
        </Snackbar>
    )
}

export default Toasty
