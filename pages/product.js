import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Grid, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    box:{        
        backgroundColor: theme.pallet.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    productName: {
        margin: '15px 0',        
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 15,
    }
}))


const Product = () =>{
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container>
                <Grid maxWidth="lg">
                    <Grid container spacing={8}>
                        <Grid item xs={8}>
                            <Box className={classes.box}>
                                Carrossel
                            </Box>
                            <Box className={classes.box} textAlign="left">
                                <Typography component="span" variant="capition" >Publicado 21 de abril de 2022</Typography>
                                <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 D R-Sport aut.</Typography>
                                <Typography component="h4" variant="h4" className={classes.price}>€ 30.000,00</Typography>
                                <Chip label="Categoria" />                            
                            </Box>
                            <Box className={classes.box} textAlign="left">
                                <Typography component="h6" variant="h6" >Descrição</Typography>
                                <Typography component="p" variant="body2" >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.box} elevation={0}>
                                <CardHeader 
                                    avatar={
                                        <Avatar>U</Avatar>
                                    }
                                    title="Ulisses Soares"
                                    subheader="ulisses@email.com"
                                />
                                <CardMedia 
                                    image={'https://source.unsplash.com/random'}
                                    title="Ulisses Soares"
                                />
                            </Card>
                            <Box className={classes.box}>
                                <Typography component="h6" variant="h6">
                                    Localização
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
        
    )
}

export default Product