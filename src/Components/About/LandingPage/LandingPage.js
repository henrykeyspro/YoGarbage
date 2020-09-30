import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import Button from "./CustomButtons/Button.js";
import Parallax from "./Parallax/Parallax.js";

import styles from "./landingPage copy";

// Sections for this page

import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function About(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax filter image={require("./Asset/gar.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>About Us.</h1>
            <div style={{textAlign:'left'}}>
              <h4>
              <p>
                YoGarbage is an established company with 
                a legal entity. 
                Registered in 2019 with Registrar of Companies – Uganda
                and Uganda Registration Service Bureau(URSB),
                it has evolved in a period of 1year in terms of 
                service and management to serve our clients better, 
                day by day and Year after Year, in this period as  
              </p>
              <p>
                YoGarbage, we have trained  
                our staff and acquired state of machinery for  
                Cleaning, Waste handling, etc 
                to increase timely services and efficiency 
                to our clients 
              </p>
              </h4>
            </div>
              <br />
            
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
         
          <TeamSection />
          <WorkSection />
        </div>
      </div>
    </div>
  );
}
