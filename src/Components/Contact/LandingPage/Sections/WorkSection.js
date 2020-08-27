import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

import styles from "./landingPageSections/workStyle.js";
import PhoneInTalk from '@material-ui/icons/PhoneInTalk';
import WhatsApp from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h1 className={classes.title}>Location</h1>
          <h2 className={classes.title}>We are located at :</h2>
          <h3 className={classes.description} style={{textAlign:'left'}}>
            <p>Skylla building, plot 23/45 </p>
            <p>Mpala, Entebbe road opposite Stabex petro station </p>
            <p>P.O.Box 1234 Kampala - Uganda</p>
          
          </h3>
          // our contacts
          <h2 className={classes.title}>Call Us On</h2>
           
          <p style={{color:'blue'}}>
            <PhoneInTalk 
            />
            +256 753473059
          </p>
          <p style={{color:'blue'}} >
            <PhoneInTalk 
            />
            +256 704798562 
          </p>
          <p style={{color:'green'}}>
          <WhatsApp 
          /> 
          +256 755592204</p>

          <form>
           
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
