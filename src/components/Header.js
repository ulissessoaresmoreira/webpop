import * as React from 'react'
import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Link from 'next/link'
import {useSession} from 'next-auth/react'

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
  },
  avatarIcon: {
    marginRight: 6
  },
  userName: {
    marginLeft: 8
  },
  headButton: {
    marginRight: 10,
  },
  logo: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '28px',
    letterSpacing: 8,    
  },
  divider: {
    margin: '8px 0'
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)
  
  const { data: getSession } = useSession()
  

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            
            <Typography variant="h6" component="div" className={classes.title}>
              <Link href="/">                
                  <a className={classes.logo}> WebPoP </a>                
              </Link>
            </Typography>
            <Link href={getSession? "/user/publish" : '/auth/signin'} passHref>
              <Button color="inherit" variant="outlined" className={classes.headButton}>
                Anunciar e vender
              </Button>
            </Link>
            {
              getSession? (
                        <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)} >
                          {
                            getSession.user.image
                            ?<Avatar className={classes.avatarIcon} src={getSession.user.image}/>
                            :<AccountCircle className={classes.avatarIcon} />
                          }
                          <Typography component="h5" variant="subtitle1" color="textPrimary" className={classes.userName}>
                            {getSession.user.name}
                          </Typography>
                        </IconButton>
              ) : null
            }
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
