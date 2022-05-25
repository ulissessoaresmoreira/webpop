import React from 'react'

import {
    Avatar,
    Box,
    Card,
    CardHeader,
    CardMedia,
    Chip,
    Container,
    Grid,
    Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'
import TemplateDefault from '../../../src/templates/Default'
import dbConnect from '../../../src/utils/dbconect'
import ProductsModel from '../../../src/models/products'
import {formatCurrency} from '../../../src/utils/currency'

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
    },
    card: {
        
    },
    cardMedia: {
        paddingTop: '56%'
    }
}))


const Product = ({product}) =>{
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container>
                <Grid maxWidth="lg">
                    <Grid container spacing={8}>
                        <Grid item xs={8}>
                            <Box className={classes.box}>
                                <Carousel
                                    autoPlay={false}
                                    animation="slide"
                                    navButtonsProps={{          
                                        style: {
                                            color: 'white'
                                        }
                                    }} 
                                >
                                    {
                                        product.files.map(file => (
                                            <Card key={file.name} className={classes.card}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image={`/uploads/${file.image}`}
                                                    title={product.title}
                                                />
                                            </Card>
                                        ))
                                    }
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random?=1"
                                            title="Título da imagem"
                                        />
                                    </Card>
                                </Carousel>
                            </Box>
                            <Box className={classes.box} textAlign="left">
                                <Typography component="span" variant="capition" >Publicado 21 de abril de 2022 - Alterar isso</Typography>
                                <Typography component="h4" variant="h4" className={classes.productName}>{product.title}</Typography>
                                <Typography component="h4" variant="h4" className={classes.price}>{formatCurrency(product.price)}</Typography>
                                <Chip label="Categoria" />                            
                            </Box>
                            <Box className={classes.box} textAlign="left">
                                <Typography component="h6" variant="h6" >Descrição</Typography>
                                <Typography component="p" variant="body2" >
                                    {product.description}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.box} elevation={0}>
                                <CardHeader 
                                    avatar={
                                        <Avatar src={product.user.image}>
                                            {product.user.image || product.user.name[0]}
                                        </Avatar>
                                    }
                                    title={product.user.name}
                                    subheader={product.user.email}
                                />
                                <CardMedia 
                                    image={product.user.image}
                                    title={product.user.name}
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

export async function getServerSideProps({query}) {
    const {id} = query

    await dbConnect()

    const product = await ProductsModel.findOne({_id: id})

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}

export default Product