import * as React from 'react'
import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Link from 'next/link'

import {  
  AppBar,  
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,    
} from '@material-ui/core'

import { AccountCircle } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    letterSpacing: 8,
  },
  avatarIcon: {
    marginRight: 6
  },
  logo: {
    textDecoration: 'none',    
  },
  divider: {
    margin: '8px 0'
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)


  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            
            <Typography variant="h6" component="div" className={classes.title}>
              <Link href="/" passHref className={classes.logo}>
                WebPoP
              </Link>
            </Typography>
            <Link href="/user/publish" passHref>
              <Button color="inherit" variant="outlined">
                Anunciar e vender
              </Button>
            </Link>
            <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)} >
              {
                true === true
                ?<Avatar className={classes.avatarIcon} src=""/>
                :<AccountCircle className={classes.avatarIcon} />
              }
              <Typography component="h5" variant="subtitle1" color="textPrimary">
                Ulisses Soares
              </Typography>
            </IconButton>
            <Menu 
              anchorEl={anchorUserMenu}
              id="account-menu"
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}

              
              
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>Meus Anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider}/>
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
        
      </AppBar>
    </>
  )
}
