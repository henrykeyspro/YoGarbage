import React, { Component } from 'react';
import logo from '../Assets/logo.jpg'
import Menu from '../Menu/Menu'
import './About.css';


class About extends Component{
    render(){
        return(
            <div>
                <h1>About Us</h1>

                <p>YoGarbage is an established company with 
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
                <h2>Our Values</h2>
                     <div>
                     <ul>
                       <li className='fd'>Quality work</li>
                       <li className='fd'>Efficiency</li>
                       <li className='fd'>Quick Services</li>
                       <li  className='fd'>Confidentiality</li>
                       <li className='fd'>Honesty</li>
                     </ul>
                    </div>
                    <h2><strong>Strategic Objectives</strong></h2>
                    <ul>
                     <li className='dg'>To ensure quality service and customer satisfaction year after year.</li>
                     <li className='dg'>To ensure a clean and waste free environment.</li>
                     <li className='dg'>To ensure timely delivery of services.</li>
                     <li className='dg'>To aim at exceeding our customers expectations</li>
                     <li className='dg'>To focus on the use to environmentally friendly machinery, equipments and tools.</li>
                     <li className='dg'>To adhere to safety measures during execution of our duties</li>
                     <li className='dg'>To offer consistent competitive prices to our customers.</li>
                     
                    </ul>
                <hr/>
            </div>
        )
    }
}
export default About;
