import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';

const emails = [
    <NavLink to='/companyform' style={{textDecoration: 'none',color:'black'}}>Company</NavLink>, 
    <NavLink to='/order' style={{textDecoration: 'none' , color:'black'}}>Individual</NavLink>];
    const useStyles = makeStyles((theme) => ({
      avatar: {
        backgroundColor: blue[100],
        color: blue[600],
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

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Request As</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const NextPage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <div className={classes.sectionDesktop}>
        <div>
          <Button 
           
            variant='outlined' 
            color="secondary" 
            onClick={handleClickOpen}
            >
            Make a pickup request
          </Button>
            <SimpleDialog 
                selectedValue={selectedValue} 
                open={open} 
                onClose={handleClose} 
            />
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <div>
          <Button 
           style={{height:'30px' , marginBottom:'-30px'}}
            variant='outlined' 
            color="secondary" 
            onClick={handleClickOpen}
            >
             Request
          </Button>
            <SimpleDialog 
                selectedValue={selectedValue} 
                open={open} 
                onClose={handleClose} 
            />
        </div>
      </div>
    </div>
  );
}

export default NextPage;