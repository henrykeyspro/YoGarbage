import React ,{useState} from 'react' 
import TextField  from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {NavLink } from 'react-router-dom'

const CompanyForm = () =>{
    // creating states for my inputs 
    const [Name , setName] = useState('');
    const [Phone , setPhone] = useState('');
    const [Email , setEmail] = useState('');
    const [Address , setAddress] = useState('');

    // creating handlers
    const NameHandler = (event) =>{
        setName(event.target.value);
    }

    const PhoneHandler = (event) =>{
        setPhone(event.target.value);
    }

    const EmailHandler = (event) =>{
        setEmail(event.target.value)
    }

    const AddressHandler = (event) =>{
        setAddress(event.target.value)
    }
    const styles = {
        width:'30%',
        margin:'10px'
    }
    return(
        <div>
            <form>
                <h2>Welcome to our customer service page</h2>
                <h4>Please Enter your details to make an Order</h4>
                <div>
                    <TextField
                        variant='outlined'
                        color='primary'
                        required
                        label='Company Name'
                        onChange={NameHandler}
                        value={Name}
                        style={styles}
                    />
               
                </div>

                <div>
                    <TextField
                        variant='outlined'
                        color='primary'
                        required
                        label='Email'
                        onChange={EmailHandler}
                        value={Email}
                        style={styles}
                    />
               
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        color='primary'
                        label='Phone'
                        required
                        onChange={PhoneHandler}
                        value={Phone}
                        style={styles}
                    />
               
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        color='primary'
                        label='Address'
                        required
                        onChange={AddressHandler}
                        value={Address}
                        style={styles}
                    />
               
                </div>
                <NavLink to='/paymentForm' >
                       <Button 
                    variant='contained'
                    color='primary'
                    style={styles}
                >Continue</Button>
                </NavLink>
             

            </form>
         
        </div>
    )
}
export default CompanyForm ; 