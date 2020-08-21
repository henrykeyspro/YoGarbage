import React from 'react'
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu'
import './About.css'
import henry from './Assets/henry.jpg'
import angel from './Assets/angel.jpg'
import ronald from './Assets/ronald.jpg'
import Henry from './Henry';
import Angel from './Angel';
import Ronald from './Ronald';
import Avatar from '@material-ui/core/Avatar';




const About = () => {
   const Styles = {
       fontWeight : 'bolder',
       fontSize : 'larger',
       margin: '900px',
   }
return (
    <div>
      
        <center>
        <h1 style={{color:'blue'}}>About Us</h1>
        <span >
            <div>
                <p className='cha'style={{textAlign:'left' , marginLeft:'400px', marginRight:'400px'}}>
                    YoGarbage is an established company with 
                    a legal entity. 
                    Registered in 2019 with Registrar of Companies – Uganda
                    and Uganda Registration Service Bureau(URSB),
                    it has evolved in a period of 1year in terms of 
                    service and management to serve our clients better, 
                    day by day and Year after Year, in this period as 
                </p> 
                <p className='cha' style={{textAlign:'left' , marginLeft:'400px', marginRight:'400px'}}>
                    YoGarbage, we have trained  
                    our staff and acquired state of machinery for  
                    Cleaning, Waste handling, etc 
                    to increase timely services and efficiency 
                    to our clients
                </p>

                <h2 style={{color:'blue'}}>Our Values</h2>
                <div>
                <ul style={{textAlign:'left' , marginLeft:'600px', marginRight:'400px'}}>
                    <li> Quality work</li>
                    <li>  Efficiency</li>
                    <li>  Quick Services</li>
                    <li>Confidentiality</li>
                    <li> Honesty</li>
                </ul>
                    
                      
                  
                       
                  
                    
            </div>
      
         </div>
        </span>

        </center>

          <h1 style={{color: 'blue',}}> Our Team       </h1>
        <div className="row">
            <div className="column">
                <div className="pro">
                  <Avatar style={{padding:'80px' , marginLeft:'120px'}}>
                     <img src={henry} alt="" style={{
                         width:'160px',
                          height:'160px'
                          }} 
                       />
                  </Avatar>
                <div className="container">
                    <h2>Nsubuga Henry</h2>
                    <p className="title">Developer</p>
                    <p>Senior software Developer at YoGarbage</p>
                    <p>nsubugahenrymicheal@gmail.com</p>
                    <Henry />
                   
                </div>
                </div>
            </div>

            <div className="column">
                <div className="pro">
                <Avatar style={{padding:'80px' , marginLeft:'120px'}}>
                     <img src={angel} alt="" style={{
                         width:'160px',
                          height:'160px'
                          }} 
                       />
                  </Avatar>
                   
                    <div className="container">
                        <h2>Nantume Angel</h2>
                        <p className="title">Developer</p>
                        <p>Senior software Developer at YoGarbage</p>
                        <p>nantumeangel@gmail.com</p>
                        <Angel />
                    </div>
                </div>
            </div>

                <div className="column">
                    <div className="pro">
                    <Avatar style={{padding:'80px' , marginLeft:'120px'}}>
                     <img src={ronald} alt="" style={{
                         width:'160px',
                          height:'160px'
                          }} 
                       />
                  </Avatar>
                  
                    <div className="container">
                        <h2>Bukenya Ronald</h2>
                        <p className="title">Developer</p>
                        <p>Senior software Developers at YoGarbage</p>
                        <p>bukenyaronald@gmail.com</p>
                        <Ronald/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default About;