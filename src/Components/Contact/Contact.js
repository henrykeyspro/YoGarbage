import React, { Component } from 'react';
import './Contact.css';
// import MenuIcon from '@material-ui/icons/Menu';
import logo from '../Assets/logo.jpg';
import Menu from '../Menu/Menu';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Email from '@material-ui/icons/Email';
import Instagram from '@material-ui/icons/Instagram';
 import Language from '@material-ui/icons/Language';
import PhoneInTalk from '@material-ui/icons/PhoneInTalk';


class Contact extends Component{
    render(){
        return(
            <div> 
                  <form>
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
                      <hr />
                  </form>
            </div>
        )
    }
}
export default Contact;
