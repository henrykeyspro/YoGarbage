import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {NavLink } from 'react-router-dom'
import PaymentForm from '../paymentForm/paymentForm'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'block',
        },
      },
      sectionMobile: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
  }));

const Order =(props)=>{
    const classes = useStyles();
    // creating states for my inputs in the order page
    const [Fname ,setFName]  = useState('');
    const [Lname , setLname] = useState('');
    const [ContactMethod , setConctactMethod] = useState('');
    const [town , setTown] = useState('');
    const [Email , setEmail] = useState('');
    const [Phone , setPhone] = useState('');
    const [GarType , setGarType] = useState('');
    const [errors , setErrors] = useState([]);
    const [ payments , setPayments] = useState('');
    const [RequestType , setRequestType] = useState('');
    const [button1 , setButton1] = useState('')

    // creating handlers for my inputs 
    const FnameHandler = (event) =>{
        setFName(event.target.value) 
    }
    const LnameHandler = (event) =>{
        setLname(event.target.value)
    }
    const ContactMethodHandler = (event) =>{
        setConctactMethod(event.target.value)
    }
    const townHandler = (event) =>{
        setTown(event.target.value)
    }
    const EmailHandler = (event) =>{
        setEmail(event.target.value)
    }
    const PhoneHandler = (event) =>{
        setPhone(event.target.value)
    }
    const GarTypeHandler = (event) =>{
        setGarType(event.target.value)
    }
    
    const paymentsHandler = (event) =>{
        setPayments(event.target.value)
    }
    const RequestTypeHandler = (event) =>{
        setRequestType(event.target.value)
    }

    return(
        <div>
            <div className={classes.sectionDesktop}>
                <form className='order1'>
                    <NavLink to='/'>
                        <ArrowBack 
                            style={{float:'left'}}
                        />
                    </NavLink>
                
                    <h2>Welcome to our customer service page</h2>
            
                    <h4>Please Enter your details to make an Order </h4>
                    
                        <TextField  
                            variant='outlined'
                            label='FirstName'
                            name='FName'
                            type='FName'
                            autoComplete
                            onChange={FnameHandler}
                            value={Fname}
                            autoFocus={true}
                            required='required' 
                            style={{margin:'10px'}}
                            
                        />
                
                            <TextField  
                                variant='outlined'
                                label='LastName'
                                name='LName'
                                type='LName'
                                autoComplete
                                onChange={LnameHandler}
                                margin ='normal'
                                value ={Lname}
                                autoFocus={true}              
                                required='required' 
                                style={{margin:'10px'}}
                            /> 
                        
                    <div>
                    <TextField  
                            variant='outlined'
                            label='email'
                            name='Email'
                            type='Email'
                            autoComplete
                            margin ='normal'
                            onChange={EmailHandler}
                            value={Email}
                            autoFocus={true}                 
                            required='required' 
                            style = {{width: '35%'}}
                        />
                    </div>
                    
                    <div>
                            <TextField  
                                variant='outlined'
                                label='Phone'
                                name='Phone'
                                type='Phone'
                                autoComplete
                                margin ='normal'
                                onChange={PhoneHandler}
                                value={Phone}
                                autoFocus={true}                
                                required='required' 
                                style={{margin:'10px',width: '35%'}}
                            />
                    </div>
                    
                    <div>
                        <TextField  
                                variant='outlined'
                                label='Place of residence'
                                name='Town'
                                type='Town'
                                autoComplete
                                onChange={townHandler}
                                value={town}
                                margin ='normal'
                                autoFocus={true}               
                                required='required' 
                                style={{margin:'10px', width: '35%'}}
                            />
                    </div>
                    
                        <PaymentForm />
                </form>
            </div>
            <div className={classes.sectionMobile}>
            <form className='order1'>
                
                <h2>Welcome to our customer service page</h2>
            
                <h4>Please Enter your details to make an Order </h4>
                    
                    <TextField  
                        variant='outlined'
                        label='FirstName'
                        name='FName'
                        type='FName'
                        autoComplete
                        onChange={FnameHandler}
                        value={Fname}
                        autoFocus={true}
                        required='required' 
                        style={{margin:'10px'}}
                        
                    />
            
                        <TextField  
                            variant='outlined'
                            label='LastName'
                            name='LName'
                            type='LName'
                            autoComplete
                            onChange={LnameHandler}
                            margin ='normal'
                            value ={Lname}
                            autoFocus={true}              
                            required='required' 
                            style={{margin:'10px'}}
                        /> 
                    
                <div>
                <TextField  
                        variant='outlined'
                        label='email'
                        name='Email'
                        type='Email'
                        autoComplete
                        margin ='normal'
                        onChange={EmailHandler}
                        value={Email}
                        autoFocus={true}                 
                        required='required' 
                        style={{margin:'10px'}}
                    />
                </div>
                
                <div>
                        <TextField  
                            variant='outlined'
                            label='Phone'
                            name='Phone'
                            type='Phone'
                            autoComplete
                            margin ='normal'
                            onChange={PhoneHandler}
                            value={Phone}
                            autoFocus={true}                
                            required='required' 
                            style={{margin:'10px'}}
                        />
                </div>
                
                <div>
                    <TextField  
                            variant='outlined'
                            label='Place of residence'
                            name='Town'
                            type='Town'
                            autoComplete
                            onChange={townHandler}
                            value={town}
                            margin ='normal'
                            autoFocus={true}               
                            required='required' 
                            style={{margin:'10px'}}
                        />
                    </div>
                
                    <PaymentForm  />
                </form>
            </div>
           
        </div>

    )

}
export default Order;