import {
    Paper,
    Container,
    IconButton,
    InputBase,
    Typography, 
    Grid,
    Box,    
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({   
    searchBox: {
        display: 'flex',        
        padding: theme.spacing(0, 2),
        marginTop: 40,
    },
    cardGrid: {
        marginTop: 50,
        fontWeight: 'bold',
    },
    box: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3), 
        backgroundColor: theme.pallet.background.white,
    }
}))


const List = () => {
    const classes = useStyles()

    return (
        <>
            <TemplateDefault>

                <Container maxWidth="lg">                    
                    <Paper className={classes.searchBox}>
                        <InputBase
                            placeholder="Ex.: iPhone XS Max com garantia"
                            fullWidth
                        />
                        <IconButton>
                            <SearchIcon></SearchIcon>
                        </IconButton>
                    </Paper>
                </Container>
                
                <Container maxWidth="lg" className={classes.cardGrid}>
                    <Box className={classes.box}>
                        <Typography constant="h6" variant="h5" align="left" color="textPrimary">
                            Anúncios
                        </Typography>
                        <Typography constant="h4" variant="body2" align="left" color="textPrimary">
                            ENCONTRADOS 200 ANÚNCIOS
                        </Typography>
                        <br/>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random?=5'}
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random?=18'}
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
                    </Box>              
                </Container>
            </TemplateDefault>
        </>
    )
}

export default List