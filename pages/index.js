
import Link from 'next/link'
import slugify from 'slugify'

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
import dbConnetc from '../src/utils/dbconect'
import ProductsModel from '../src/models/products'
import {formatCurrency} from '../src/utils/currency'


const useStyles = makeStyles((theme) => ({   
    productLink: {
        textDecoration: 'none !important'
    },
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


const Home = ({products}) => {
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
                </Container>                
            </TemplateDefault>
        </>
    )
}

export async function getServerSideProps() {
    await dbConnetc()

    const products = await ProductsModel.aggregate([{
        $sample: { size: 6}
    }])
    console.log(products)
    return{
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}

export default Home