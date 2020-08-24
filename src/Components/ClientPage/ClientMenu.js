import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import logo from '../Assets/logo.jpg';
import { NavLink } from 'react-router-dom';
// import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginRight:'450px'
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const ClientMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to='/' style={{color: 'black' ,textDecoration:'none'}}>Home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to='/about' style={{color: 'black'}}>About</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to='/services' style={{color: 'black'}}>Services</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to='/contact' style={{color: 'black'}}>Contact</NavLink>
      </MenuItem>
       <MenuItem>
          <NavLink to='/login' style={{color: 'black'}}>Clients </NavLink>
        </MenuItem>
          
    
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" >
        <Toolbar style={{backgroundColor:'white'}}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer" >
          </IconButton>
          <IconButton>
          <NavLink to='/' style={{color: 'black',marginLeft:'-50px'}}><img src={logo} alt='logo' className='logo'/></NavLink>
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography className={classes.title} variant="h4" style={{color:'black',}} noWrap>
                Yo-Garbage
            </Typography>
            
            <IconButton color="inherit">
            <NavLink to='/' style={{color: 'black',textDecoration:'none'}}>Home</NavLink>
            </IconButton>
            <IconButton color="inherit">
            <NavLink to='/services' style={{color: 'black',textDecoration:'none'}}>Service</NavLink>
            </IconButton>
            <IconButton color="inherit">
            <NavLink to='/contact' style={{color: 'black',textDecoration:'none'}}>Contact </NavLink>
            </IconButton>
            <IconButton>
            <NavLink to='/about' style={{color: 'black',textDecoration:'none'}}>About </NavLink>
            </IconButton>
            <IconButton>
            <NavLink to='/login' style={{color: 'black',textDecoration:'none'}}>Clients </NavLink>
            </IconButton>
           
          
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <h4 style={{marginRight: '30px ', color:'black'}}>Yo-Garbage</h4>
            <IconButton>
                <HomeIcon style={{marginTop: '5px', marginRight: '5px', color: 'white'}} />
            </IconButton>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              < MenuIcon style={{color:'black'}} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      
    </div>
  );
}
export default ClientMenu;