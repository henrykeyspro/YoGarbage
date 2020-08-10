import React, { Component } from 'react';
import logo from '../Assets/logo.jpg'
import { TextField, Button } from '@material-ui/core';


class Services extends Component{
   
    render(){

        return(
            
            <div>
                < h1>Our Services</ h1>
                <p>Strategic Objectives</p>
                <ul>
                     <li className='dg'>To ensure quality service and customer satisfaction year after year.</li>
                     <li className='dg'>To ensure a clean and waste free environment.</li>
                     <li className='dg'>To ensure timely delivery of services.</li>
                     <li className='dg'>To aim at exceeding our customers expectations</li>
                     <li className='dg'>To focus on the use to environmentally friendly machinery, equipments and tools.</li>
                     <li className='dg'>To adhere to safety measures during execution of our duties</li>
                     <li className='dg'>To offer consistent competitive prices to our customers.</li>
                     
                    </ul>
                   
            </div>
        )
    }
}
export default Services;