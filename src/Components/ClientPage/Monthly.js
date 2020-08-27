import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

const Monthly = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const Styles ={
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px'
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="New Request" {...a11yProps(0)} />
          <Tab label="Ongoing Requests" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div>
              <h2>
                  New Monthly Requests
              </h2>
              <table style={{border: '1px solid black', borderRadius: '7px', width: '100%'}}>
                  <tr style={{border: '1px solid black'}}>
                      <th style={Styles}>
                          Name
                      </th>
                      <th style={Styles}>
                          Address
                      </th>
                      <th style={Styles}>
                          Phone Number
                      </th>
                      <th style={Styles}>
                          Method Of Payment
                      </th>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
              </table>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div>
              <h2>
                 On Going Monthly Requests
              </h2>
              <table style={{border: '1px solid black', borderRadius: '7px', width: '100%'}}>
                  <tr style={{border: '1px solid black'}}>
                      <th style={Styles}>
                          Name
                      </th>
                      <th style={Styles}>
                          Address
                      </th>
                      <th style={Styles}>
                          Phone Number
                      </th>
                      <th style={Styles}>
                          Method Of Payment
                      </th>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
                  <tr style={{border: '1px solid black'}}>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                      <td style={Styles}>
                          Test
                      </td>
                  </tr>
              </table>
          </div>
        </TabPanel>
    </div>
  );
} 
export default Monthly ;