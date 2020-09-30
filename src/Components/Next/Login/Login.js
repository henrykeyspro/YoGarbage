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
import { Formik, Form, ErrorMessage } from 'formik';

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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="email"
            label="Email"
            style={{width:'100%'}}
    
          />
           <ErrorMessage name="email" component="div" />
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            style={{width:'100% '}}
            id="password"
            autoComplete="current-password"
          />
           <ErrorMessage name="password" component="div" />
           <Button type="submit"
              disabled={isSubmitting}
              variant="contained"
              type="submit"
              style={{
                width:'100% '
              }}
            >
             Submit
           </Button>
           <Grid container>
            <Grid item>
              <NavLink to="/password" variant="body2" style={{  float:'left',marginRight:'-285px' , textDecoration:'none'}}>
                {"Forgot password"}
              </NavLink>
              <NavLink to='/signUp' style={{  float:'left', textDecoration:'none'}}>
                  {'Dont have an account'}
              </NavLink>
            </Grid>
          </Grid>
         </Form>
       )}
     </Formik>
        {/* <form className={classes.form}  > */}
        
       
          {/* TextField for inputting passord for login */}
          
      </div>
    </Container>
  );
}
export default Login;

