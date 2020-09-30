import React, { useState } from 'react';
// import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import SignUp from '../SignUP/SignUP';

const Phone =()=>{
    const [value , setValue] = useState()
    return(
        <div>
            <SignUp 
             Value={value}
             Change={setValue}
            />
        </div>
    )
}
export default Phone;