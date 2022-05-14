import {
  Button,  
  Container,
  Grid,
  Typography
} from '@material-ui/core'

import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../src/templates/Default'

import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) =>({
  
  buttonAdd:{
    margin: '30px auto',
    display: 'block',
    width: 220,
  }, 
}))

const Home = () => {
  const classes = useStyles()
  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align='center'>
          Meus Anúncios
        </Typography>
        <Link href="/user/publish" passHref> 
          <Button variant="contained" color='primary' className={classes.buttonAdd}>
            Publicar novo Anúncio
          </Button>
        </Link>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random?=3'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>                
                </>
              }
              /> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random?=4'}
              title="Produto Y"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>                
                </>
              }
            /> 
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random?=5'}
              title="Produto Z"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>                
                </>
              }
            />           
          </Grid>        
        </Grid>
      </Container>    
    </TemplateDefault>
  )
}

Home.requireAuth = true

export default Home