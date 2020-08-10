import React, { Component } from 'react';
import './Admin.css'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

class Admin extends Component{
    render(){
        return(
            <div>
                <h1>
                    Yo-Garbage
                </h1>
                <h3 className='cong'>Congratulations......!!!!</h3>
                <p>Thank you for submitting in your request details</p>
                <p>We shall send you an email</p>

                <h4>Any Question or Comment</h4>
                <p>We would love to hear from you</p>
                <p> <Button 
                        variant='contained' 
                        color='default' 
                        style={{
                            textDecoration:'none',
                            borderRadius:'10px'
                        }}
                    ><NavLink to ='https://forms.gle/LW2emcQEkS8Vq5CL7'>click here</NavLink>
                        </Button>
                </p>
            </div>

        )
    }
};

export default Admin;