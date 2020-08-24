import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import flags from 'react-phone-number-input/flags';
import '../Login/Login.css'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink ,Link } from 'react-router-dom';
import Fire from '../../Container/Fire';


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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
    const classes = useStyles();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const emailChanged =(event)=>{
      setEmail(event.target.value)
    }
    const passwordChanged =(event) =>{
      setPassword(event.target.value)
    }
    
    const login = (event) =>{
      event.preventDefault();
      Fire.auth().signInWithEmailAndPassword(email , password).then((u)=>{}).catch((error)=>{
        console.log(error)
      })
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={props.submit} >
          <p style={{color:'red'}}>{props.errorMessage}</p>
          <p style={{color:'green'}}>{props.successMessage}</p>
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="Email"
            value={email}
            onChange={emailChanged}
            label="Username"
            style={{width:'100%'}}
    
          />
       
          {/* TextField for inputting passord for login */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="password"
            value={password}
            onChange={passwordChanged}
            label="Password"
            type="password"
            style={{width:'100% '}}
            id="password"
            autoComplete="current-password"
          />
 
          <Grid container>
            <Grid item>
              <NavLink to="/password" variant="body2" style={{  float:'left',marginRight:'-285px' , textDecoration:'none'}}>
                {"Forgot password"}
              </NavLink>
            </Grid>
          </Grid>
       
           <NavLink to='clientPage'>
            <Button
                type="submit"
                // onClick={login}
                variant="contained"
                style={{
                  width:'100% '
                }}
              >
                Login
              </Button>
           </NavLink>
         
    
        </form>
      </div>
    </Container>
  );
}
export default Login;

