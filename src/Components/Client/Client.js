import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Client.css';

// import Dropdown from './drop'

class Client extends Component{
    render(){
        return(
            <div>
                <form className='clients' size='1'>
                    <h1>Our beloved Client</h1> 
                    <hr />
                    <h2>Please make a Schedule </h2> 
                    <h3>Request pick-up</h3>
                
                    <label>Location:  </label>
                    
                   
                   <h3>Garbage</h3>
                   <label> Type:  </label>
                 <select className='style' size='1'>
                 <option>  </option>
                    <option>Industrial</option>
                    <option>Domestic</option>
                  
                 </select> 
                    <br />
                    <h3>Request Type</h3>
                    <label> Type: </label>
                   <select className='style' size='1'><br />
                        <option>  </option>
                         <option>One time pick-up</option>
                         <option>daily</option>
                         <option>weekly</option>
                         <option>monthly</option>
                         <option>annually</option>
                    </select> 
                     <br />
                     <h3>Payment</h3>
                    <label>Payment: </label>
                   <select className='style' size='1'><br />
                   <option>  </option> 
                    <option>cash </option>
                    <option>mobile money</option>
                    <option>credit card</option>
                   
                  </select>
                  <br />
                        <Button
                        variant='contained'
                        color='primary'
                        style={{
                            margin:'10px',
                            padding:'10px',
                            color:'white',
                            borderRadius:'5px',
                            
                        }}
                        >submit</Button>

                {/* <select>
                    <option>

                    </option>
                </select>
                     <br />
                    
                    <TextField 
                    variant='outlined'
                    label='Garbage'

                    />
                    <br />
                    
                    <TextField 
                    variant='outlined'
                    label='Type of Request'
                    
                     />
                    <br />
                    <TextField 
                    variant='outlined'
                    label='Payments'
                    
                     />
                    <br />
                    <Backdrop 
                    
                    />
                    <Button
                    >Submit</Button>
                    */}

                </form>
            </div>
        )
    }
}
export default Client;