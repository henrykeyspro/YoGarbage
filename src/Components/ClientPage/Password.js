import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import  CardContent from '@material-ui/core/CardContent'

const styles ={
    margin:'15px',
    width:'50%',
    height:'50px'
}
const Password = (props) =>{
    return (
        <div>
        
            <Card variant='elevation'style={{margin:'20px'}}>
                <CardContent>
                    <form>
                        <div>
                            <TextField 
                                style={styles}
                                variant='outlined'
                                label ='Current Password'
                                name='password'
                                type='password'
                            />
                        </div>
                    <div>
                            <TextField 
                                style={styles}
                                variant='outlined'
                                label ='New Password'
                                name='password'
                                type='password'
                            />
                        </div>
                        <div>
                            <TextField 
                                style={styles}
                                variant='outlined'
                                label ='Retype New Password '
                                name='password'
                                type='password'
                            />
                        </div>
                        <Button style={styles} variant='contained' color='primary'>Submit</Button>

                    </form>
                </CardContent>
            </Card>
            
        </div>

    );
}
export default Password ;