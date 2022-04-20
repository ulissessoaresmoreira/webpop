import { makeStyles} from '@material-ui/core/styles'

import {    
    Card as CardMUI,
    CardActions,
    CardContent,
    CardMedia,    
    Typography
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    cardMedia:{
        paddingTop: '56%'
    }
}))

const Card = ({ image, title, subtitle, actions, outraInfo}) => {
    const classes = useStyles()

    return (
        <CardMUI >
            <CardMedia
                className={classes.cardMedia}                
                image={image}
                title={title}
            />
            <CardContent>
                <Typography component="h2" variant="h5" textprimary>
                    {title}
                </Typography>
                <Typography>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                    ?(
                        <CardActions>
                            {actions}
                        </CardActions>
                    ): null
            }
        </CardMUI>
    )
}

export default Card