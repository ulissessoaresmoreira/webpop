import {
    Paper,
    Container,
    IconButton,
    InputBase,
    Typography, 
    Grid,    
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({   
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: 40,
    },
    cardGrid: {
        marginTop: 50,
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
                <Container maxWidth="lg" className={classes.cardGrid}>
                    <Typography constant="h2" variant="h4" align="center" color="textPrimary">
                        Destaques
                    </Typography>
                    <br/>
                    <Grid container spacing={4} >
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                image={'https://source.unsplash.com/random?=7'}
                                title="Produto X"
                                subtitle="R$ 60,00"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                image={'https://source.unsplash.com/random?=8'}
                                title="Produto Y"
                                subtitle="R$ 60,00"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                image={'https://source.unsplash.com/random?=9'}
                                title="Produto Z"
                                subtitle="R$ 60,00"
                            />                            
                        </Grid>                        
                    </Grid>
                </Container>                
            </TemplateDefault>
        </>
    )
}

export default Home