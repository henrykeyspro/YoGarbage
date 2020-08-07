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
  let [FName, setFName] = useState(' ');
  let [nameError , setnameError] = useState('');
  const [LName , setCompany] = useState(' ');
  const [email , setEmail] = useState(' ');
  const [Phone , setPhone] = useState(' ');
  const [errors , setErrors] = useState([])
  const [District , setDistrict] = useState(' ');
  const [city , setCity] = useState(' ');
  const [Description , setDescription] = useState(' ');
   
  const FNameHandler=(event)=>{
    let num = event.target.name
    let val = event.target.value
    let err = ''
    if(val != '' && Number(val) ){
      err = <strong><p>Name must contain letters</p></strong>
    }
    setFName([num]=val)
    setnameError(nameError = err)
  }
  // const errorHandler=()=>{
  //   setErrors( 
  
  //   )
  // }

  const validate = (email , FName , LName ,values ,Phone , District , city  )  => {
    const errors = [];
  // First Name validation
    if (FName.length===0) {
      errors.push(<p>Field required</p>)
    } else if (FName.length < 3) {
      errors.push(<p>Name is too short</p>);
    }else if(FName == Number){
      errors.push(<p>Name is not a Number</p>)
    }
    // Last Name validation
    if(LName.length===0){
      errors.push(<p>Field Required</p>)
    }
    else if(LName.length < 3){
      errors.push(<p>Name is too short</p>)
    }
    else if(LName == Number){
      errors.push(<p>Name is not a Number</p>)
    }
    // email validation 
    if (email == !typeof(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/)) {
      errors.push(<p>Invalid email address</p>)
    }
    // Phone validation
    if(Phone.length > 10 || Phone.length < 10 ){
      errors.push(<p>InValid Phone Number</p>)
    }else if(Phone.length ===0){
      errors.push(<p>Please Enter your Phone Number</p>)
    }
    if(District.length===0){
      errors.push(<p>Please Enter Your District</p>)
    }else if(District== Number){
      errors.push(<p>District is not a Number</p>)
    }
    if(city.length===0){
      errors.push(<p>Please Enter Your city</p>)
    }else if(city == Number){
      errors.push(<p>city is not a Number</p>)
    }

  
    return errors;
  };
  

  const LNameHandler =(event)=> {
    setCompany(event.target.value)
  }
   const emailHandler = (event)=>{
   setEmail(event.target.value)
  }
  const phoneHandler=(event) =>{
    setPhone(event.target.value)
  }
  const DistrictHandler =(event) =>{
    setDistrict(event.target.value)
  }
  const cityHandler=(event)=>{
    setCity(event.target.value)
  }
  const DescriptionHandler=(event)=>{
    setDescription(event.target.value)
  }
  const buttonHandler = ()=>{
      alert(`you are submitting as: ${FName} ${LName}` );
    }

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
    margin :'5px'

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
          <form className='contact' onSubmit={validate}>
                      <h1>Contact Us</h1>
                        <p className='para'>We always want to hear from you<br />
                        please find us on the contacts below.....</p>
                        <h2><strong>Location</strong></h2>
                      <p className='para'>Skylla building, plot 23/45 </p>
                      <p className='para'>Mpala, Entebbe road opposite Stabex petro station </p>
                      <p className='para'>P.O.Box 1234 Kampala - Uganda</p>
                        <strong><h2><strong>Call us on:</strong></h2></strong> 
                    
                      <p>
                      <PhoneInTalk 
                      className='me'
                      color='primary'
                      style={{
                        color:'blue',
                      }}
                     />
                      0349674890
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
                      <p>
                      <WhatsApp 
                      color='primary'
                      style={{
                        color:'lightgreen'
                      }}
                      /> 
                      078847554555
                      
                      <Twitter
                      className='haz' 
                      variant='contained'
                      color='primary'
                       style={{
                        color:'lightBlue'
                      }}
                      />
                     yoGarbage@twitt.com
                      </p>
                    
                      <p>
                      <Instagram
                      className='hiz' 
                       color='primary'
                       style={{
                        color:'red'
                      }}
                      />
                      yoGarbage@insta.ug
                      
                      <Facebook
                      className='haz'  
                      color='primary'
                       style={{
                        color:'blue'
                      }}
                      />
                      yoGarbage
                      </p>
                     
                      <p>
                      <Email
                      color='primary'
                       style={{
                        color:'red'
                      }}
                      />
                      yogargage@gmail.co.ug
                      
                      <Language 
                      className='her'
                      color='primary'
                      style={{
                        color:'blue'
                      }}
                      />
                      http:// yogarbage.co.ug
                      </p>
                     
                  </form>
                  <form>
                    <h3>Introduce Yourself</h3>
                    
                    <TextField  
                      variant='outlined'
                      label='FirstName'
                      name='FName'
                      type='FName'
                      autoComplete
                      autoFocus
                      name='fullname'
                      value={FName}
                      onChange={FNameHandler}
                      required='required'
                      style={styles}
                      error ={nameError}
                     
                      
                    />
                   <p style={{color:'red'}}>{nameError}</p>
                    <TextField  
                      variant='outlined'
                      label='LastName'
                      name='LName'
                      type='LName'
                      autoComplete
                      autoFocus
                      value={LName}
                      onChange={LNameHandler}

                      required
                      style={styles}
                    />
                    <h3> How Can We Contact You ?</h3>
                    <TextField  
                      variant='outlined'
                      label='Email'
                      name='email'
                      type='email'
                      autoComplete
                      autoFocus
                      value={email}
                      onChange={emailHandler}
                      required
                      style={styles}

                    />
                    <TextField  
                      variant='outlined'
                      label='phone'
                      name='phone'
                      type='phone'
                      autoComplete
                      autoFocus
                      onChange={phoneHandler}
                      value={Phone}
                      required
                      style={styles}

                    />
                    <h3>Preffered Method Of Contact</h3>
                    <input
            type="radio"
            value="black"
            name="color"
          />
            
            <label className="radio"><b>Email</b></label>
            <input
                type="radio" 
                value="red" 
                name="color"
            />
    
            <label className="radio"><b>Phone</b></label>
            <h3>Where Do You Need Our Services?</h3>
            <TextField  
                      variant='outlined'
                      label='District'
                      name='District'
                      type='District'
                      autoComplete
                      autoFocus
                      onChange={DistrictHandler}
                      value={District}
                      required
                      style={styles}
                    />
                     <TextField  
                      variant='outlined'
                      label='City'
                      name='city'
                      type='city'
                      autoComplete
                      autoFocus
                      value={city}
                      onChange={cityHandler}
                      required
                      style={styles}
                    />
                   <h3>Additional Information About Your Request</h3>
                   <label>Description: </label>
                   <TextareaAutosize
                     variant='standard'
                     label='Description'
                     name='Description'
                     type='Description'
                     autoComplete
                     autoFocus
                     value={Description}
                     onChange={DescriptionHandler}
                     optional
                  
                   />
                   <p>Please provide any information that may help us route your request.</p>
                    
                   <FormControlLabel
            control={<
                Checkbox
                style={{marginLeft: '-180px', marginBottom: '-70px'}}
                color="primary" />}
          />
          <p>  Agree to terms and By Submitting This Form,<br/>
            You Agree To The Storage And Handling Of Your Information <br/>
            By This Website As Governed By Our Privacy Policy.</p>
          <br/>
          <Button variant='contained' color='primary' onClick={buttonHandler}type='submit'>Submit</Button>
                  </form>
          </div>
          <div className={classes.sectionMobile}>
              <div>
              <form className='contact'>
                      <h1>Contact Us</h1>
                        <p className='para'>We always want to hear from you<br />
                        please find us on the contacts below.....</p>
                        <h2><strong>Location</strong></h2>
                      <p className='para'>Skylla building, plot 23/45 </p>
                      <p className='para'>Mpala, Entebbe road opposite Stabex petro station </p>
                      <p className='para'>P.O.Box 1234 Kampala - Uganda</p>
                        <strong><h2><strong>Call us on:</strong></h2></strong> 
                    
                      <p>
                      <PhoneInTalk 
                      className='mes'
                      color='primary'
                      style={{
                        color:'blue',
                      }}
                     />
                      0349674890
                     </p>
                     <p>
                     <PhoneInTalk 
                      className='mes'
                      color='primary'
                      style={{
                        color:'blue',
                      }}
                       
                     />
                      +256 704798562 
                     </p>
                      <p>
                      <WhatsApp 
                      color='primary'
                      style={{
                        color:'lightgreen'
                      }}
                      /> 
                      078847554555
                      
                      <Twitter
                      className='hazs' 
                      variant='contained'
                      color='primary'
                       style={{
                        color:'lightBlue'
                      }}
                      />
                     yoGarbage@twitt.com
                      </p>
                    
                      <p>
                      <Instagram
                      className='hizs' 
                       color='primary'
                       style={{
                        color:'red'
                      }}
                      />
                      yoGarbage@insta.ug
                      
                      <Facebook
                      className='hazs'  
                      color='primary'
                       style={{
                        color:'blue'
                      }}
                      />
                      yoGarbage
                      </p>
                     
                      <p>
                      <Email
                      color='primary'
                       style={{
                        color:'red'
                      }}
                      />
                      yogargage@gmail.co.ug
                      
                      <Language 
                      className='hers'
                      color='primary'
                      style={{
                        color:'blue'
                      }}
                      />
                      http:// yogarbage.co.ug
                      </p>
                     
                  </form>
              </div><br/>
                  
                  <br/>
                <div>
                <form className='mobileForm'>
                    <h3>Introduce Yourself</h3>
                    <TextField 
                      className='bobi'  
                      variant='outlined'
                      label='FisrtName'
                      value={FName}
                      onChange={FNameHandler}
                      required
                      
                      
                    />
                    <TextField 
                      className='bobi' 
                      variant='outlined'
                      label='LastName'
                      value={LName}
                      onChange={LNameHandler}
                      required
                    />
                    <h3> How Can We Contact You ?</h3>
                    <TextField  
                      variant='outlined'
                      label='Email'
                      value={email}
                      onChange={emailHandler}
                      required
                      />
                    <TextField  
                      variant='outlined'
                      label='phone'
                      value={Phone}
                      onChange={phoneHandler}
                      required
                    />
                    <h3>Preffered Method Of Contact</h3>
                    <input
            type="radio"
            value="black"
            name="color"
          />
            
            <label className="radio"><b>Email</b></label>
            <input
                type="radio" 
                value="red" 
                name="color"
            />
    
            <label className="radio"><b>Phone</b></label>
            <h3>Where Do You Need Our Services?</h3>
            <TextField  
                      variant='outlined'
                      label='District'
                      value={District}
                      onChange={DistrictHandler}
                      required
                    />
                     <TextField  
                      variant='outlined'
                      label='City'
                      value={city}
                      onChange={cityHandler}
                      required
                    />
                   <h3>Additional Information About Your Request</h3>
                   <TextField 
                     variant='standard'
                     label='Description'
                     value={Description}
                     onChange={DescriptionHandler}
                     optional
                   />
                   <p>Please provide any information that may help us route your request.</p>
                    
                   <FormControlLabel
            control={<
                Checkbox
                style={{marginLeft: '-180px', marginBottom: '-70px'}}
                color="primary" />}
          />
          <p>Agree to terms and By Submitting This Form,
            <br />
            You Agree To The Storage And Handling Of Your Information 
            <br />
            By This Website As Governed By Our Privacy Policy.
            </p>
          <br/>
          <Button 
           variant='contained' color ='primary'
          >Submit</Button>
                  </form>
                </div>
            
          </div>
        </Toolbar>
      
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
export default Contact;