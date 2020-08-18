import React from 'react'
import './paymentForm.css'
import mtn from './Assets/mtn.jpg';
import airtel from './Assets/airtel.jpg';
import cash from './Assets/cash.jpg';
import creditCard from './Assets/creditCard.jpg'
import Paper from '@material-ui/core/Paper'

const PaymentForm = (props) =>{
    const styles = {
        height: '80%',
        width:  '50%',
        margin:'0 20px 0 20px',
        backgroundColor:'silver',
        textAlign: 'center',
        rounded: true
      };
    return(

        <div>
     
            <form >
                <Paper elevation={30} style={styles}>
                    <form>
                        <h1>Payment Methods</h1><hr/>
                        <div>
                                
                            <input type='radio' /><img src={mtn} /> <label>MTN MobileMoney</label>
                            <br/>

                            <input type='radio' /><img src={airtel} /> <label> Airtel Money</label>
                            <br/>
                            <input type='radio' /><img src={creditCard} /> <label>Credit Card</label>
                            <br/>
                            <input type='radio' /><img src={cash} /> <label>Cash On Delivery</label>
                        </div>
                    </form>

                </Paper>
            </form>
        </div>
    )
}
export default PaymentForm;