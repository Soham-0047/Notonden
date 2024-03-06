import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useSelector} from 'react-redux'
import { Divider, Stack } from '@mui/material';
import { NavLink,Link, useNavigate } from 'react-router-dom';
import { signOut } from '../redux/userRedux';
const pages = ['records','create'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const { currentUser } = useSelector((state) => state.user) || {};

    const navigate = useNavigate();

  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleSignOut = async () => {
      try {
        await fetch("/api/auth/signout");
        dispatch(signOut());
        // toast.success("Successfully Signout", {
        //   position: "top-right",
        //   autoClose: 2200,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{backgroundColor:"#265073"}} >
        <Toolbar disableGutters >
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  
                    <Typography textAlign="center"><Link to={page} style={{
                        textDecoration: "none",
                        color: "black",
                        textTransform: "capitalize",
                      }}>{page}</Link></Typography>
                  
                   
                </MenuItem>
               
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link to={page} style={{
                        textDecoration: "none",
                        color: "White",
                        margin:2,
                        fontSize:"1.1rem",
                        textTransform: "capitalize",
                      }}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
           
            
          </Box>
          {currentUser ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      to="profile"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        textTransform: "capitalize",
                      }}
                    >
                      Profile
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      onClick={handleSignOut}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        textTransform: "capitalize",
                      }}
                    >
                      Signout
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" sx={{backgroundColor:"#F1FADA"}} flexItem />}
              spacing={2}
              
            >
              <Link to="register" style={{textDecoration:'none',color:'white',cursor:"pointer"}}>REGISTER</Link>
              <Link to="login" style={{textDecoration:'none',color:'white',cursor:"pointer"}}>LOGIN</Link>
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar