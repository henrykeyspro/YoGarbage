import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const PaymentForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };
  const handleCategory = (event) => {
    setAmount(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} style={{color:'white' , width: '35%' }} variant='contained' color='primary'>Next</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Category</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Choose</InputLabel>
              <Select
                native
                value={amount}
                onChange={handleCategory}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Daily</option>
                <option value={20}>Weekly</option>
                <option value={30}>Monthly</option>
                <option value={40}>One time</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Amount</InputLabel>
              <Select disabled
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={amount}
                onChange={handleCategory}
                input={<Input />}
              >
                <MenuItem value="" >
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>5000 UGX</MenuItem>
                <MenuItem value={20}>30000 UGX</MenuItem>
                <MenuItem value={30}> 80000 UGX</MenuItem>
                <MenuItem value={40}>10000 UGX</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogTitle>Payment Form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Pay</InputLabel>
              <Select 
                native
                value={age}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={50}>MTN  Money</option>
                <option value={60}>Airtel Money</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Number</InputLabel>
              <Select disabled
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={50}>O778920621</MenuItem>
                <MenuItem value={60}>0755592204</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <NavLink to='/' >
            <Button onClick={handleClose} color="primary">
              Ok
            </Button>
          </NavLink>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default PaymentForm;