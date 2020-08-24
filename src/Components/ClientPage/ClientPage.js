import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 450,
    width: 300,
    
  },
  control: {
    padding: theme.spacing(2),
  },
}));
const Styles ={
  width:'100%',
  height:'50px',
  textAlign:'left'
}

 const ClientPage = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="left" style={{width:'20%' , margin:'50px'}}>
          {[0].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}   >
                  <Button style={Styles}>My YoGarbage Account</Button>
                  <Button style={Styles}>Pick Up Requests Sent</Button>
                  <Button style={Styles}>Progressing Requests</Button>
                  <Button style={Styles}>Monthly pick Ups</Button>
                  <Button style={Styles}>Weekly Pick Ups</Button><br/>
                  <Button style={Styles}>Daily Pick Ups</Button>
                  <Divider />
                  <Button style={Styles}>Change Password</Button>
                  <Button style={Styles}>Customer Attendance History</Button>
                  <Button style={Styles}>Logout</Button>

              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* <Paper className={classes.control}>
          
        </Paper> */}
      </Grid>
    </Grid>
  );
}
export default ClientPage ;