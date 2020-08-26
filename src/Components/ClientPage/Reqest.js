import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { green } from '@material-ui/core/colors';
import './Request.css';

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

const Request = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Styles ={
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px'
  }
  return (
    <div className={classes.root}>
        <Tabs
          value={value}
          className='requst'
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="New Open Requests" {...a11yProps(0)} className='requst'/>
          <Tab label="On Going Requests" {...a11yProps(1)} className='requst'/>
        </Tabs>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
              <h2>
                  New Open Requests
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
                On Going Requests
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
export default Request;