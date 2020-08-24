import React, {Component} from 'react';
import Fire from './Fire';
import LoginValidation from '../Components/Login/LoginValidation/LoginValidation'
import Phone from '../Components/SignUP/Phone'
import Menu from '../Components/Menu/Menu'
import Radium from 'radium';
import {
  BrowserRouter as 
  Router , 
  Route ,
  Switch 
} from  'react-router-dom';
import Services from '../Components/Services/Services'
// import SignUp from '../Components/SignUP/Phone';
import Home from '../Components/Home/Home';
import HomeMenu from '../Components/Menu/Menu'
import Contact from '../Components/Contact/Contact';
import About from '../Components/About/About'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Admin from '../Admin/Admin'
import Box from '@material-ui/core/Box';
import Order from '../Components/Order/Order'
import Next from '../Components/Next/Next';
import './App.css'
import PaymentForm from '../Components/paymentForm/paymentForm';
import CompanyForm from '../Components/CompanyForm/CompanyForm';
import ClientPage from '../Components/ClientPage/ClientPage';
import Login from '../Components/Login/Login';
// import ForgotPassword from '../Components/Login/Forgot_password/Password'
function Copyright() {
  return (
    <Typography 
      variant="body2" 
      color="textSecondary" 
      align="center" 
      style={{
        color: 'black',
        position: 'fixed',
        right: '0',
        bottom: '0',
        left: '0',
        padding: '1rem'
      }}
      >
      {'Copyright © '}
      <Link color="inherit" href="/">
        YoGarbage
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class App extends Component{
  state ={
    user:{}
  }
   authListener(){
     Fire.auth().onAuthStateChanged((user)=>{
      //  console.log(user);
       if(user){
         this.setState({user})
          localStorage.setItem('user', user.uid);
       }
       else{
         this.setState({user : null})
         localStorage.removeItem('user')
       }
     })
   }
   componentDidMount(){
     this.authListener();
   }
  render(){
    return(
      <div className='App'>
       
        <Router>
        <HomeMenu />
        {/* {this.state.user ? (<ClientPage/>) : (< LoginValidation/>)} */}
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path ='/services' component={Services} />
            <Route path ='/signUp' component={Phone}/>
            <Route path ='/about' component={About} />
            <Route path ='/next' component={Next} />
            <Route path ='/paymentForm' component={PaymentForm} />
            <Route path ='/contact' component={Contact} />
            <Route path ='/admin' component={Admin} />
            <Route path ='/order' component={Order} />
            <Route path='/companyform' component={CompanyForm} />
            <Route path ='/login' component={LoginValidation} />
            <Route path ='/clientPage' component={ClientPage} />
     
        
            </Switch>
            <Box mt={8}>
            <Copyright />
          </Box>
        </Router>
       <span>
         {/* <hr  style={{border:"1px solid blue" , borderRight:'1px solid blue', borderLeft:'1px solid blue' }}/>
        <footer className='footer'>
          
          <p> &copy; YoGarbage All Rights reserved </p>
        </footer> */}
      </span>
      </div> 
      
       
    )
      
       
      
    
  }
}
export default App;                   