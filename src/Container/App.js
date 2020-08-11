import React, {Component} from 'react';
import Login from '../Components/Login/Login'
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
import Client from '../Components/Client/Client';
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
import PaymentForm from '../Components/paymentForm/paymentForm';
import CompanyForm from '../Components/CompanyForm/CompanyForm';

function Copyright() {
  return (
    <Typography 
      variant="body2" 
      color="textSecondary" 
      align="center" 
      style={{
        color: 'black',
        marginTop: '-50px'
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
  render(){
    return(
      <div>
     
       
        <Router>
        <HomeMenu />
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path ='/client' component={Client}/>
            <Route path ='/services' component={Services} />
            <Route path ='/signUp' component={Phone}/>
            <Route path ='/about' component={About} />
            <Route path ='/next' component={Next} />
            <Route path ='/paymentForm' component={PaymentForm} />
            <Route path ='/contact' component={Contact} />
            <Route path ='/admin' component={Admin} />
            <Route path ='/order' component={Order} />
            <Route path='/companyform' component={CompanyForm} />
        
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