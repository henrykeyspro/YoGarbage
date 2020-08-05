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
import SignUp from '../Components/SignUP/Phone';
import Home from '../Components/Home/Home';
import HomeMenu from '../Components/Menu/Menu'
import Contact from '../Components/Contact/Contact';
import About from '../Components/About/About'
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
            <Route path ='/login' component={Login} />
            <Route path ='/contact' component={Contact} />

            </Switch>
        </Router>
       <span>
        <footer className='footer'>
          <p> &copy; YoGarbage All Rights reserved </p>
        </footer>
      </span>
      </div> 
      
       
    )
      
       
      
    
  }
}
export default App;                   