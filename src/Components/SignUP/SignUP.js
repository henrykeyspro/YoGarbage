import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import flags from 'react-phone-number-input/flags';
import '../SignUP/SignUP.css'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    border: '1px solid gray',
    borderRadius: '10px'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) => {
    const[fname, setfName] = useState('')
    const[lname, setlName] = useState('')
    const[password, setPassword] = useState('')
    const[email, setEmail] = useState('')
    const[agreed, setAgreed] = useState(false)
    const[color, setColor] = useState(null)
    const[confirmPassword, setConfirmPassword] = useState('')
    const[errors, setErrors] = useState('')
    const[success, setSuccess] = useState('')

    const fnameChangedHandler = (event) => {
        setfName(event.target.value)
    }

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    const lnameChangedHandler = (event) => {
        setlName(event.target.value)
    }

    const passwordChangedHandler = (event) => {
        setPassword(event.target.value)
    }

    const agreedHandler = (event)  =>{
        setAgreed(event.target.checked)
    }

    const handledSubmit = (event) => {
    event.preventDefault()
    if(password >= 6 && confirmPassword === password){
        setErrors({
            success: 'You have successfully logged in!'
        })
        console.log(success)
    } else {
        setSuccess({
            errors : 'wrong username or Password'
        })
        console.log(errors)
    } 
    }
     const buttonHandler = () =>{
         alert(`You are signing up as ${fname} `)
     }
    const handleColorChange = (event) => {
        setColor(event.target.value)
    }
    const emailHandler = (event) =>{
      setEmail(event.target.value)
    }
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={fname}
            onChange={fnameChangedHandler} 
            id="fname"
            label="First Name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="name"
            value={lname}
            onChange={lnameChangedHandler}
            label="Last Name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="email"
            value={email}
            onChange={emailHandler}
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
          />
           <PhoneInput
                required
                style={{
                    width: '57%',
                    backgroundColor : 'white',
                    border: '1px solid gray',
                    padding: '10px',
                    borderRadius: 5,
                    margin: 'auto'
                }}
                value={props.Value}
                flags={flags}
                onChange={props.Change}
                placeholder='Enter Phone Number'
            />
          {/* <DatePickers 
            style={{
                width: '50%',
                backgroundColor : 'white',
                border: '1px solid gray',
                padding: '17px',
                borderRadius: 5,
                margin: 'auto'
            }}
           /> */}
          <input
            type="radio"
            value="black"
            checked={color === 'black'} 
            onChange={handleColorChange} 
          />
            <br />
            <label className="radio"><b>Male</b></label><br />
            <input
                type="radio" 
                value="red" 
                checked={color === 'red'}
                onChange={handleColorChange}
            />
          <br />
            <label className="radio"><b>Female</b></label>
          <br />
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="password"
            value={password}
            onChange={passwordChangedHandler}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            onChange={confirmPasswordHandler}
            name="password"
            value={confirmPassword}
            label="Confirm Password"
            type="password"
          />
          <FormControlLabel
            control={<
                Checkbox
                checked={agreed}
                onChange={agreedHandler} 
                color="primary" />}
            label="Agree to terms and Conditions"
          />
          <br />
         
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={buttonHandler}
            className={classes.submit}
          >
            Sign Up
          </Button>
        
          <br />
          <Grid container>
            <Grid item>
              <NavLink to="/login" variant="body2" style={{marginLeft: '90px', marginTop: '-10px'}}>
                {"Already have an account? Login"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default SignUp;