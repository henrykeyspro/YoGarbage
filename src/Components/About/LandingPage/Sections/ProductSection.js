import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import InfoArea from "../InfoArea/InfoArea.js";

import styles from "./landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <div style={{textAlign:'left',marginLeft:'250px'}}>
          <h5 className={classes.description}>
          <p>
            Optimus Tenant Finders also helps the 
            landlord to manage his or her tenants. 
          </p>
          <p> 
            Optimus Tenant Finders application offers 
            security for the landlord and the 
            tenants at larger.
          </p>
          </h5>
          </div>
         
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              
              description="Optimus Tenant Finders allows Landlords to 
              freely chat with their Tenants online at low costs and 
              it also gives Tenants chance to express their views to 
              their landlords."
              
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="If you want to become part of us then 
              SignUp if you already have an account Login.
              so why don't become a part of the best online rental 
              application ever."
             
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              
              description="Our Clients Data is kept in the safest places
              on this planet so dont be in fear of what will happen to my
              details because we will never share them with anyone."
              
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
