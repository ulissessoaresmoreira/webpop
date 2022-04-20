import {
    Paper,
    Container,
    IconButton,
    InputBase,
    Typography, 
    Grid,
    Card,
    CardMedia,
    CardContent,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({   
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: 40,
    },
    cardMedia: {
        paddingTop: '46%',
    }
    
}))


const Home = () => {
    const classes = useStyles()

    return (
        <>
            <TemplateDefault>
                <Container maxWidth="md">
                    <Typography constant="h1" variant="h3" align="center" color="textPrimary">
                        O que deseja encontrar?
                    </Typography>
                    <Paper className={classes.searchBox}>
                        <InputBase
                            placeholder="Ex.: iPhone 12 com garantia"
                            fullWidth
                        />
                        <IconButton>
                            <SearchIcon></SearchIcon>
                        </IconButton>
                    </Paper>
                </Container>
                <Container maxWidth="lg" className={classes.grid}>
                    <Typography constant="h2" variant="h4" align="center" color="textPrimary">
                        Destaques
                    </Typography>
                    <br/>
                    <Grid container spacing={4} >
                        <Grid item xs={12} sm={6} md={4}>
                            <Card >
                                <CardMedia
                                    className={classes.cardMedia}                
                                    image={'https://source.unsplash.com/random'}
                                    title={"Título da imagem"}
                                />
                                <CardContent>
                                    <Typography component="h2" variant="h5" textprimary>
                                    Produto X
                                    </Typography>
                                    <Typography>
                                    R$ 60,00
                                    </Typography>
                                </CardContent>                                
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card >
                                <CardMedia
                                    className={classes.cardMedia}                
                                    image={'https://source.unsplash.com/random'}
                                    title={"Título da imagem"}
                                />
                                <CardContent>
                                    <Typography component="h2" variant="h5" textprimary>
                                    Produto y
                                    </Typography>
                                    <Typography>
                                    R$ 60,00
                                    </Typography>
                                </CardContent>                                
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card >
                                <CardMedia
                                    className={classes.cardMedia}                
                                    image={'https://source.unsplash.com/random'}
                                    title={"Título da imagem"}
                                />
                                <CardContent>
                                    <Typography component="h2" variant="h5" textprimary>
                                    Produto z
                                    </Typography>
                                    <Typography>
                                    R$ 60,00
                                    </Typography>
                                </CardContent>                                
                            </Card>
                        </Grid>                        
                    </Grid>
                </Container>                
            </TemplateDefault>
        </>
    )
}

export default Home