import React from 'react';
import PropTypes from 'prop-types';
import { withStyles , makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
    
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

const useStyles = makeStyles((theme) => ({

       
    sectionDesktop: {
    //   display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    sectionMobile: {
        display:'center',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
const StylesDesktop ={
    width:'130%',
    textAlign:'left',
    marginTop:'-90px'
}

const StyleMobile ={
    width:'100%',
    textAlign:'left',
    marginTop:'50px',
    display:  'none'
}

function ProductValues(props) {
  const { classes } = props;

  return (
    <div>
        <div className={classes.sectionDesktop}>
            <section className={classes.root}>
              <Container className={classes.container}>
                
                <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <div className={classes.item}>
                    
                    <Paper elevation='20' style={StylesDesktop}>
                    <Typography variant="h4" className={classes.title}>
                        Garbage Brockrage App
                    </Typography>
                    <Typography variant="h6">
                        <ul>
                            <li>
                            {' Yo-Garbage is a tech management company that bridges the gap between the garbage collection company and the customers who wants our services by monitoring collection companies from polluting the enviroment '}
                            </li>
                            <br/>
                            <li>
                            {'Garbage collection app allows individual , households and small businesses to manage waste collection  services from a hand smart phone.'}
                            </li>
                            <br/>
                            <li>
                            {'Request for on-demand services , regular collection , extra pickups, rate collections of all in one place at the same time.'}
                            </li>
                        </ul>
                    </Typography>
                    </Paper>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.item}>
                    <Paper elevation='20' style={StylesDesktop}>
                        
                    <Typography variant="h4" className={classes.title}>
                        Why Yo-Garbage?
                    </Typography>
                    <Typography variant="h6">
                        <ul>
                            <li>
                                {'We came up with a Garbage brockrage project due to : '}
                            </li>
                            <li>
                                {'Hazardous wastes in the environment leech into the ground, and ultimately, into ground water. This water is used for many things, from watering the local fields to drinking. Toxic liquid chemicals from waste can also seep into water streams and bodies of water.'}
                            </li>
                            <li>
                                {' There is revenue in recycling. Cities that do not implement proper removal and recycling of wastes miss on this. They also miss out on the resources that can be reused and on the employment opportunities that a recycling centre brings.'}
                            </li>
                            
                        </ul>
                    </Typography>
                    </Paper>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.item}>
                    
                    <Paper elevation='20' style={StylesDesktop}>
                    <Typography variant="h4" className={classes.title}>
                        Our Purpose
                    </Typography>
                    <Typography variant="h6">
                        <ul>
                            <li>
                                {'Our purpose is to solve the problem of Garbage by: '}
                            </li>
                            <li>
                                {' By working with registered collection companies'}
                            </li>
                            <li>
                                {' By signing consignment note when your waste is collected and retain a copy  '}
                            </li>
                            <li>
                                {' By dealing with licensed companies who will collect and recycle or reuse your waste '}
                            </li>
                            <li>
                                {' By quoting good price which sound good to customers '}
                            </li>
                            <li>
                                {'By inspecting recycling plants and depositing site to avoid contamination  '}
                            </li>
                            <li>
                                {' Through monitoring workers interms of deliverying service to the people'}
                            </li>
                        </ul>
                    </Typography>
                    </Paper>
                    </div>
                </Grid>
                </Grid>
            </Container>
        </section>
    </div>
    <div className={classes.sectionMobile}>
            <section className={classes.root}>
        <Container className={classes.container}>
            
            <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
                <div className={classes.item}>
                
                <Paper elevation='20' style={StyleMobile}>
                <Typography variant="h4" className={classes.title}>
                    Garbage Brockrage App
                </Typography>
                <Typography variant="h6">
                    <ul>
                        <li>
                        {' Yo-Garbage is a tech management company that bridges the gap between the garbage collection company and the customers who wants our services by monitoring collection companies from polluting the enviroment '}
                        </li>
                        <br/>
                        <li>
                        {'Garbage collection app allows individual , households and small businesses to manage waste collection  services from a hand smart phone.'}
                        </li>
                        <br/>
                        <li>
                        {'Request for on-demand services , regular collection , extra pickups, rate collections of all in one place at the same time.'}
                        </li>
                    </ul>
                </Typography>
                </Paper>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div className={classes.item}>
                <Paper elevation='20' style={StyleMobile}>
                    
                <Typography variant="h4" className={classes.title}>
                    Why Yo-Garbage?
                </Typography>
                <Typography variant="h6">
                    <ul>
                        <li>
                            {'To solve the problems and burdens of garbage.'}
                        </li>
                        <li>
                            {'To make the city A better place for every one.'}
                        </li>
                        <li>
                            {'Conviniency anytime  anywhere from your handy device '}
                        </li>
                        
                    </ul>
                </Typography>
                </Paper>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div className={classes.item}>
                
                <Paper elevation='20' style={StyleMobile}>
                <Typography variant="h4" className={classes.title}>
                    Our Purpose
                </Typography>
                <Typography variant="h5">
                    {'By registering, you will access specially negotiated rates '}
                    {'that you will not find anywhere else.'}
                </Typography>
                </Paper>
                </div>
            </Grid>
            </Grid>
        </Container>
        </section>
    </div>
    </div>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
