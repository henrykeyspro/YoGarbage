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
        
          <h2 className={classes.title}>Strategic Objectives</h2>
          <h3 className={classes.description} style={{textAlign:'left'}}>
            <p> To ensure quality service and customer satisfaction year after year. </p>
            <p>To ensure a clean and waste free environment. </p>
            <p>  To ensure timely delivery of services.</p>
            <p> To aim at exceeding our customers expectations.</p>
            <p>To focus on the use to environmentally friendly machinery, equipments and tools.</p>
            <p>To adhere to safety measures during execution of our duties</p>
            <p>To offer consistent competitive prices to our customers.</p>
          
          </h3>
        
          <form>
           
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
