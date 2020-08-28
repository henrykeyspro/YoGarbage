import React, { Component } from 'react';
import depots from '../Assets/depots.jpg'
import slider1 from './sliders/slider1.jpg'
// import SimpleImageSlider from "react-simple-image-slider";
import '../Home/Home.css'
import Button from '@material-ui/core/Button'
import {NavLink} from 'react-router-dom'
import NextPage from '../Next/Next'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'
import ProductValues from './home2/home2';
import Home3 from './home3/Home3';



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
      
      const Home = (props) => {
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
      
        return (
        <div className={classes.grow}>
          
            
               <div className={classes.sectionDesktop}>
                 <Paper elevation='10'width="95%" style={{marginRight: '40px', marginLeft: '40px', marginTop: '8px'}} >
                   <img src={depots} alt='slider' className='slide' />
                 </Paper>
                  
                  <ProductValues />
                 
                  <Home3 />
                     
                   
                </div>
                <div className={classes.sectionMobile}>
                <Paper elevation='10'width="95%" >
                   <img src={depots} alt='slider' className='mobi' />
                 </Paper>
                  
                  <ProductValues />
                 
                  <Home3  />
                </div>
                
            
        </div>
        );
      }
    
export default Home;