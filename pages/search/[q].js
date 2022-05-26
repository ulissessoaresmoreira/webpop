import Link from 'next/link'
import slugify from 'slugify'

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
import { formatCurrency } from '../../src/utils/currency'
import ProductsModel from '../../src/models/products'
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


const List = ({products}) => {
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
                            ENCONTRADOS {products.length} ANÚNCIOS
                        </Typography>
                        <br/>
                        <Grid container spacing={3} >
                            {
                                products.map(product => {
                                    const category = slugify(product.category).toLowerCase()
                                    const title = slugify(product.title).toLowerCase()
                                    return (
                                        <Grid key={product._id} item xs={12} sm={6} md={4}>
                                            <Link href={`/${category}/${title}/${product._id}`} passHref>
                                                <a className={classes.productLink}>
                                                    <Card
                                                        image={`/uploads/${product.files[0].name}`}
                                                        title={product.title}
                                                        subtitle={formatCurrency(product.price)}
                                                    />
                                                </a>
                                            </Link>
                                        </Grid>
                                    )
                                })
                            }                                   
                        </Grid>
                    </Box>              
                </Container>
            </TemplateDefault>
        </>
    )
}

export async function getServerSideProps({query}) {
    const { q } = query

    const products = await ProductsModel.find({
        $or: [
            {
                title: {
                    $regex: q,
                    
                }
            },
            {
                description: {
                    $regex: q,
                    
                }
            },
        ]
    })
    
    return{
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}

export default List