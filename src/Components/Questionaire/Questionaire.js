import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TextareaAutosize } from '@material-ui/core';
import HomeMenu from '../Home/Menu';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    border: '1px solid black',
    borderRadius: '10px'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Questionaire = () => {
    const [check, setCheck] = useState(null)
    const [color, setColor] = useState(null)
    const [agreed, setAgreed] = useState(false)
    const [advert, setAdvert] = useState(null)
    const [text, setText]  = useState('')

    let checkHandler = (event) => {
        setCheck(event.target.value)
    }
    let colorHandler = (event) => {
        setColor(event.target.value)
    }
    let AgreedHandler = (event) =>{
        setAgreed(event.target.checked)
    }
    let AdvertHandler = (event) =>{
        setAdvert(event.target.value)
    }
    let textHandler = (event) =>{
        setText(event.target.value)
    }
    const submitHandler = () =>{
        alert(`Thank you for your submition`)
    }
  const classes = useStyles();

  return (
      <div>
          <HomeMenu />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" color='primary'>
          Strictly for Landlords
        </Typography>
        <hr/>
        <strong>
            <p>
                Are you a Landlord?
            </p>
               </strong>
              <label>
                   Yes
               </label>
               <input  
                type='radio'
                value='red'
                checked={color === 'red'}
                onChange={colorHandler} 
            />
            <br />
            <label>
                No
            </label>
            <input 
                type='radio' 
                value='blue'
                checked={color === 'blue'}
                onChange={colorHandler} 
            />
            <strong>
            <p>
                Are you willing to work hand in hand with us ?
            </p>
           </strong>
            <label>
              Yes
            </label>
                <input 
                    type='radio' 
                    value='black'
                    checked={check === 'black'}
                    onChange={checkHandler} 
                />
                <br />
                <label>
                    No
                </label>
                <input 
                    type='radio' 
                    value='green'
                    checked={check === 'green'}
                    onChange={checkHandler} 
                />
                <strong>
                <p>
                    Tell us a breif introduction about yourself?
                </p>
                </strong>
                <TextareaAutosize
                    style={{
                        padding: '20px'
                    }}
                    type="text" 
                    variant="outlined"
                    margin="normal"
                    required
                    value={text}
                    onChange={textHandler}
                />
                <p>
                <strong>Are you ready to agree to the</strong> <NavLink to='/terms'>terms and conditions</NavLink>
                </p>
                 <label>
                     Yes
                 </label>
                <input 
                type='checkbox'
                checked ={agreed}
                onChange ={AgreedHandler}
                required
                />
          <strong>
            <p>
                Do you want to advertise with us?
            </p>
          </strong>
            <label>
                Yes
            </label>
            <input 
                type='radio' 
                value='black'
                checked={advert==='black'}
                onChange={AdvertHandler}
            />
            <label>
                No
            </label>
            <input
                type='radio' 
                value='green'
                checked={advert==='green'} 
                onChange={AdvertHandler}
            />
            <p>
                <strong>If you are not a Landlord.</strong>
            <NavLink to='/'>
                Home
            </NavLink>
            </p>
         <NavLink to='/phone'>
         <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={submitHandler}
            className={classes.submit}
          >
            Submit
          </Button>
         </NavLink>
        </form>
      </div>
    </Container>
    </div>
  );
}

export default Questionaire;