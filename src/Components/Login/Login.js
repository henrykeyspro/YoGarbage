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

const Login = (props) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const passwordChangedHandler = (event) => {
        setPassword(event.target.value)
    }
    const emailHandler = (event) =>{
      setEmail(event.target.value)
    }
    const styles = {
        width:'60%',
        margin:'10px 30px 10px 30px',
        
    }
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate >
       
          <TextField
            variant="standard"
            margin="normal"
            required
            name="email"
            value={email}
            onChange={emailHandler}
            label="Email"
            style={styles}
            type="email"
            id="email"
            autoComplete="email"
          />
          
          <br />
          {/* TextField for inputting passord for login */}
          <TextField
            variant="standard"
            margin="normal"
            required
            name="password"
            value={password}
            onChange={passwordChangedHandler}
            label="Password"
            type="password"
            style={styles}
            id="password"
            autoComplete="current-password"
          />
         
          <br />
         
          <Button
            type="submit"
            variant="contained"
            style={{
              margin:'10px 30px 10px 30px'
            }}
            // color="primary"
            // onClick={buttonHandler}
            className={classes.submit}
          >
            Login
          </Button>
        
          <br />
          <Grid container>
            <Grid item>
              <NavLink to="/signUp" variant="body2" style={{marginLeft: '90px', marginTop: '-10px'}}>
                {"Don't have account? SignUp"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default Login;