import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem.js";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";

import styles from "./landingPageSections/teamStyle.js";
import Henry from "../../Henry";
import Angel from "../../Angel";
import Ronald from "../../Ronald";
import henry from './Assets/henry.jpg';
import angel from './Assets/angel.jpg';
import ronald from './Assets/ronald.jpg'
const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={henry} style={{width:'160px',height:'160px'}} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nsubuga Henry
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h4>
              <CardBody>
                <div className={classes.description}>
                  <p>Senior software Developer at YoGarbage</p>
                  <p>nsubugahenrymicheal@gmail.com</p>
                  <Henry/>
                </div>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid} >
                <img src={angel} style={{width:'160px',height:'160px'}} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nantume Angel
                <br />
                <small className={classes.smallTitle}>Managing Director</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                <p>Managing director at YoGarbage </p>
                <p>nantumeangel@gmail.com</p>
                </p>
                 <Angel />
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ronald} style={{width:'160px',height:'160px'}}alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Bukenya Ronald 
                <br />
                <small className={classes.smallTitle}>Marketing Director</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                <p>Marking Director at YoGarbage </p>
                <p>bukenyaronald@gmail.com</p>
                </p>
                 <Ronald />
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
