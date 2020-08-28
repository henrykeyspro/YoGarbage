import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import  CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles';

const styles ={
    margin:'15px',
    width:'50%',
    height:'50px'
}

const Style ={
    margin:'15px',
    width:'100%',
    height:'50px'
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
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
  
const Password = (props) =>{
    const classes = useStyles();
    return (
        <div>
            <div className={classes.sectionDesktop}>
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
            <div className={classes.sectionMobile}>
            <Card variant='elevation'style={{margin:'20px'}}>
                <CardContent>
                    <form>
                        <div>
                            <TextField 
                                style={Style}
                                variant='outlined'
                                label ='Current Password'
                                name='password'
                                type='password'
                            />
                        </div>
                    <div>
                            <TextField 
                                style={Style}
                                variant='outlined'
                                label ='New Password'
                                name='password'
                                type='password'
                            />
                        </div>
                        <div>
                            <TextField 
                                style={Style}
                                variant='outlined'
                                label ='Retype New Password '
                                name='password'
                                type='password'
                            />
                        </div>
                        <Button style={Style} variant='contained' color='primary'>Submit</Button>

                    </form>
                </CardContent>
            </Card>
            </div>
        </div>

    );
}
export default Password ;