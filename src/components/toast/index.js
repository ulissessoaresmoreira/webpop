import { Snackbar } from "@material-ui/core"
import MuiAlert from '@mui/material/Alert'

const Toasty = ({open, text, severity, onClose=null}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        if(onClose) onClose()
    }
}
