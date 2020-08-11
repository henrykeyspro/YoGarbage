import React , {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../Assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import './Contact.css';
import TextField from '@material-ui/core/TextField';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Email from '@material-ui/icons/Email';
import Instagram from '@material-ui/icons/Instagram';
import Checkbox from '@material-ui/core/Checkbox';
 import Language from '@material-ui/icons/Language';
import PhoneInTalk from '@material-ui/icons/PhoneInTalk';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    display: 'center',
    width: '100%' ,

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
  // const FNameHandler=(event)=>{
  //   let num = event.target.name
  //   let val = event.target.value
  //   let err = ''
  //   if(val != '' && Number(val) ){
  //     err = <strong><p>Name must contain letters</p></strong>
  //   }
  //   setFName([num]=val)
  //   setnameError(nameError = err)
  // }
  // const errorHandler=()=>{
  //   setErrors( 
  
  //   )
  // }

 
  
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
  const styles = {
    margin :'10px'

  }

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
    ></Menu>
      
  );

  return (
    <div className={classes.grow}>
        <Toolbar>
        
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <form className='contact' >
                      <div className='headerr'>
                      <h1>Contact Us</h1>
                        <p className='para'>We always want to hear from you<br />
                        please find us on the contacts below.....</p>
                        <h2><strong>Location</strong></h2>
                      <p className='para'>Skylla building, plot 23/45 </p>
                      <p className='para'>Mpala, Entebbe road opposite Stabex petro station </p>
                      <p className='para'>P.O.Box 1234 Kampala - Uganda</p>
                        <strong><h2><strong>Call us on:</strong></h2></strong> 
                    
                      </div>
                      <p className='me'>
                      <PhoneInTalk 
                      
                      color='primary'
                      style={{
                        color:'blue',
                      }}
                     />
                      +256 753473059
                     </p>
                     <p className='me'>
                     <PhoneInTalk 
                      
                      color='primary'
                      style={{
                        color:'blue',
                      }}
                       
                     />
                      +256 704798562 
                     </p>
                     <p className='me'>
                       <WhatsApp 
                      
                      color='primary'
                      style={{
                        color:'lightgreen'
                      }}
                      /> 
                      +256 755592204</p>
                      
                      <br />
                     
                  </form>
                 
          </div>
          <div className={classes.sectionMobile}>
              <div>
              <form className='contact'>
                      <h1>Contact Us</h1>
                        <p className='mobilepara'>We always want to hear from you<br />
                        please find us on the contacts below.....</p>
                        <h2><strong>Location</strong></h2>
                      <p className='mobilepara'>Skylla building, plot 23/45 </p>
                      <p className='mobilepara'>Mpala, Entebbe road opposite Stabex petro station </p>
                      <p className='mobilepara'>P.O.Box 1234 Kampala - Uganda</p>
                        <strong><h2><strong>Call us on:</strong></h2></strong> 
                    
                     
                        <p>
                      <PhoneInTalk 
                      className='me'
                      color='primary'
                      style={{
                        color:'blue',
                      }}
                     />
                      +256 753473059
                     </p>
                     <p>
                     <PhoneInTalk 
                      className='me'
                      color='primary'
                      style={{
                        color:'blue',
                      }}
                       
                     />
                      +256 704798562 
                     </p>
                      <WhatsApp 
                      color='primary'
                      style={{
                        color:'lightgreen'
                      }}
                      /> 
                      +256 755592204
                      <br />
                     
                  </form>
              </div><br/>
                  
                  <br/>
                <div>
               
                </div>
            
          </div>
        </Toolbar>
      
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
export default Contact;