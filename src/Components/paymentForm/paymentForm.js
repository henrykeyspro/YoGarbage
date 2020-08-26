import React from 'react'
import './paymentForm.css'
import mtn from './Assets/mtn.jpg';
import airtel from './Assets/airtel.jpg';
import cash from './Assets/cash.jpg';
import creditCard from './Assets/creditCard.jpg'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'

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

    const PaymentForm = (props) =>{
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState(null);
        const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
      
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      
        const handleProfileMenuOpen = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleMobileMenuClose = () => {
          setMobileMoreAnchorEl(null);
        };
      
        const handleMenuClose = () => {
          setAnchorEl(null);
          handleMobileMenuClose();
        };
      
        const handleMobileMenuOpen = (event) => {
          setMobileMoreAnchorEl(event.currentTarget);
        };
      
        const [color , setColor] = React.useState(null)
        const colorHandler =(event) =>{
            setColor(event.target.value);
        }
        const styles = {
            height: '80%',
            width:  '40%',
            marginRight:'30%',
            marginLeft:'30%',
            backgroundColor:'silver',
            textAlign: 'left',
           
        };
        const Styles ={
            height: '30%',
            width:  '80%',
            marginRight:'20%',
            marginLeft:'10%',
            backgroundColor:'silver',
            textAlign: 'left',
        }
        

        return(

            <div>
        
                <form >

                 <div className={classes.grow}>
          
            
                    <div className={classes.sectionDesktop}>  
                    <Paper elevation={30} style={styles}>
                        <form>
                            <h3><center>Payment Methods</center> </h3><hr/>
                            <div>
                                <label className='mtn'>    
                                 
                                 <input type='radio'
                                 className='radio'
                                  onChange={colorHandler}
                                  value='black'
                                  checked={color === 'black'}
                                 /><img src={mtn} />  
                                 MTN MobileMoney
                                </label>
                                <br/>
                                <label className='mtn'>
                                  <input type='radio' 
                                   className='radio'
                                   checked={color === 'blue'}
                                   onChange={colorHandler}
                                   value='blue'
                                 /><img src={airtel} />  
                                  Airtel Money
                                </label>
                                <br/>
                                <label className='mtn'>

                                  <input type='radio'
                                   className='radio'
                                   checked={color === 'green'}
                                   onChange={colorHandler} 
                                   value='green'
                                  /><img src={cash} />
                                   Cash On Delivery
                                </label>
                            </div>
                        </form>

                    </Paper>   
              
                    </div>
                    <div className={classes.sectionMobile}>
                    <Paper elevation={30} style={Styles}>
                        <form>
                            <h3><center>Payment Methods</center> </h3><hr/>
                            <div>
                                <label className='airtel'>    
                                 
                                 <input type='radio'
                                 className='radio1'
                                  onChange={colorHandler}
                                  value='black'
                                  checked={color === 'black'}
                                 /><img src={mtn} />  
                                 MTN MobileMoney
                                </label>
                                <br/>
                                <label className='airtel'>
                                  <input type='radio' 
                                   className='radio1'
                                   checked={color === 'blue'}
                                   onChange={colorHandler}
                                   value='blue'
                                 /><img src={airtel} />  
                                  Airtel Money
                                </label>
                                <br/>
                                <label className='airtel'>

                                  <input type='radio'
                                   className='radio1'
                                   checked={color === 'green'}
                                   onChange={colorHandler} 
                                   value='green'
                                  /><img src={cash} />
                                   Cash On Delivery
                                </label>
                            </div>
                        </form>

                    </Paper>

                    </div>
           
       
                 </div>
                    
                </form>
            </div>
        )
    }
    export default PaymentForm;