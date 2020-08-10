import React from 'react'
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu'
import './About.css'
import henry from './Assets/henry.jpg'
import angel from './Assets/angel.jpg'
import ronald from './Assets/ronald.jpg'



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
        <span style={Styles}>
            
        <p style={{textAlign:"left"}}>YoGarbage is an established company with 
                    a legal entity. <br /> 
                    Registered in 2019 with Registrar of Companies – Uganda<br />
                    and Uganda Registration Service Bureau(URSB),
                    it has evolved in a period of 1year in terms of <br />
                    service and management to serve our clients better, 
                    day by day and Year after Year, in this period as </p> 
                   <p> YoGarbage, we have trained  
                    our staff and acquired state of machinery for  <br />
                    Cleaning, Waste handling, etc 
                    to increase timely services and efficiency <br />
                     to our clients</p>

                     
                     
                         <h2 style={{color:'blue'}}>Our Values</h2>
                         <div>
                             
                       <p >Quality work</p>
                       <p className='fd'>Efficiency</p>
                       <p className='fd'>Quick Services</p>
                       <p  className='fd'>Confidentiality</p>
                       <p className='fd'>Honesty</p>
                    
                         </div>
        </span>

        </center>

    <h1 style={{color: 'blue',}}> Our Team       </h1>
    <div className="row">
    <div className="column">
        <div className="pro">
        <img src={henry} alt="" style={{width: '150px', height: '150px', borderRadius: '5px'}} />
        <div className="container">
            <h2>Nsubuga Henry</h2>
            <p className="title">Developer</p>
            <p>Senior software Developer at skylla connect ug</p>
            <p>nsubugahenrymicheal@gmail.com</p>
            <p><button className="button">Contact</button></p>
        </div>
        </div>
    </div>

    <div className="column">
        <div className="pro">
        <img src={angel} alt="" style={{width: '200px', height: '150px', borderRadius: '5px'}} />
        <div className="container">
            <h2>Nantume Angel</h2>
            <p className="title">Developer</p>
            <p>Senior software Developer at Skylla connect ug</p>
            <p>nantumeangel@gmail.com</p>
            <p><button className="button">Contact</button></p>
        </div>
        </div>
    </div>

    <div className="column">
        <div className="pro">
        <img src={ronald} alt="" style={{width: '200px', height: '150px', borderRadius: '5px'}} />
        <div className="container">
            <h2>Bukenya Ronald</h2>
            <p className="title">Developer</p>
            <p>Senior software Developers at skylla connect ug</p>
            <p>bukenyaronald@gmail.com</p>
            <p><button className="button">Contact</button></p>
        </div>
        </div>
    </div>
    </div>
    </div>
)
}
export default About;