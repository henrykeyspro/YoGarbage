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
import FormField from "./FormField";
import {useFormik}from 'formik'
import * as yup from 'yup'


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


    
    const initialValues = {
      email: "",
      password: "",
     
    };
    const validationSchema = yup.object().shape({
      email: yup
        .string()
        .email()
        .required("Email is a required field"),
      password: yup
        .string()
        .required("Please enter your password")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        )
    });
    
    const Login = ({onSubmit}) =>{
      const classes = useStyles();
    //   event.preventDefault();
    //   Fire.auth().signInWithEmailAndPassword(email , password).then((u)=>{}).catch((error)=>{
    //     console.log(error)
    //   })
    // }
    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit
    });
    const emailProps = formik.getFieldProps("email");
    const passwordProps = formik.getFieldProps('password');
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} >
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="email"
            type='email'
            id='email'
            label="Username"
            style={{width:'100%'}}
            {...emailProps}
          />
       
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
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
            {...passwordProps}
          />
          {formik.touched.password && formik.errors.password ? (
           <div>{formik.errors.password}</div>
          ) : null}
 
 
          <Grid container>
            <Grid item>
              <NavLink to="/password" variant="body2" style={{  float:'left',marginRight:'-285px' , textDecoration:'none'}}>
                {"Forgot password"}
              </NavLink>
            </Grid>
          </Grid>

            <Button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                variant="contained"
                style={{
                  width:'100% '
                }}
              >
                Login
              </Button>
        </form>
      </div>
    </Container>
  );
}
export default Login;

