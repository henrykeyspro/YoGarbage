import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton } from '@material-ui/core';
import Home3 from '../Home/home3/Home3';

const styles = {
    border: '1px solid black',
    width: '400px',
    marginTop: '100px',
    borderRadius: '7px',
    textAlign: 'left',
    marginLeft: '10px',
    color: 'black'
}

const AddresStyles = {
    border: '1px solid black',
    width: '400px',
    marginTop: '-205px',
    borderRadius: '7px',
    textAlign: 'left',
    marginLeft: '10px',
    float: 'right',
    marginRight: '100px',
    color: 'black'
}

const MobileStyle ={
    border: '1px solid black',
    borderRadius: '7px',
    width: '100%',
    textAlign: 'left',
    marginBottom: '10px',
    color: 'black'
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    margin:'10px',
    backgroundColor:'white'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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

 const ClientAccountPage = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  return (
      <div>
        <div className={classes.sectionDesktop}>
            <Card className={classes.root}variant="elevation">
                <CardContent>
                <h1 style={{float:'left' ,marginTop:'-20px'}}>
                    Account Overview
                </h1>
                <div style={styles}>
                    <h4 style={{marginLeft: '10px'}}>
                        Account Details
                    </h4>
                    <IconButton style={{float: 'right', marginTop: '-60px', borderRadius: '30px', color: 'blue'}}>
                        <EditIcon />
                    </IconButton>
                    <hr />
                    <p style={{margin: '25px'}}>
                        Your Name
                    </p>
                    <p style={{margin: '25px'}}>
                        email@gmail.com
                    </p>

                    
                </div>
                <div style={AddresStyles}>
                    <h4 style={{marginLeft: '10px'}}>
                        Address Book
                    </h4>
                    <IconButton style={{float: 'right', marginTop: '-60px', borderRadius: '30px', color: 'blue'}}>
                        <EditIcon />
                    </IconButton>
                    <hr />
                    <p style={{marginLeft: '10px'}}>
                        Your default shipping address:
                    </p>
                    <p style={{marginLeft: '10px'}}>
                        Name
                        ,
                        Location
                    </p>
                    <p style={{marginLeft: '10px'}}>
                        Telphone Number
                    </p>
                </div>
                
            </CardContent>
                
            </Card>
        </div>

        <div className={classes.sectionMobile}>
            <Card className={classes.root}variant="outlined">
                <CardContent>
                <h3 style={{float:'left'}}>
                    Account Overview
                </h3>
                <div style={MobileStyle}>
                    <h4 style={{marginLeft: '10px'}}>
                        Account Details
                    </h4>
                    <IconButton style={{float: 'right', marginTop: '-60px', borderRadius: '30px', color: 'blue'}}>
                        <EditIcon />
                    </IconButton>
                    <hr />
                    <p style={{marginLeft: '10px'}}>
                        Your Name
                    </p>
                    <p style={{marginLeft: '10px'}}>
                        email@gmail.com
                    </p>
                    <Button style={{marginLeft: '3px', marginBottom: '5px', marginRight: '3px'}} variant='outlined' color='primary'>
                        Change Password
                    </Button>
                </div>
                <div style={MobileStyle}>
                    <h4 style={{marginLeft: '10px'}}>
                        Address Book
                    </h4>
                    <IconButton style={{float: 'right', marginTop: '-60px', borderRadius: '30px', color: 'blue'}}>
                        <EditIcon />
                    </IconButton>
                    <hr />
                    <p style={{marginLeft: '10px'}}>
                        Your default shipping address:
                    </p>
                    <p style={{marginLeft: '10px'}}>
                        Name
                        ,
                        Location
                    </p>
                    <p style={{marginLeft: '10px'}}>
                        Telphone Number
                    </p>
                </div>

            </CardContent>
                
            </Card>
        </div>
        {/* {renderMobileMenu}
        {renderMenu} */}
    </div>
  );
}
export default ClientAccountPage ;
