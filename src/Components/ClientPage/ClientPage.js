import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import ClientAccountPage from './ClientAccount';
import Request from './Reqest';
import Monthly from './Monthly';
import Daily from './Daily';
import Weekly from './Weekly';
import Password from './Password';

const routes = [
  {
    path: "/account",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>
      <ClientAccountPage />
    </div>
  },
  {
    path: "/pickupRequest",
    sidebar: () => <div></div>,
    main: () => <div>
      <Request />
    </div>
  },
  {
    path: "/monthlyPickup",
    sidebar: () => <div></div>,
    main: () => <div>
      <Monthly />
    </div>
  },
  {
    path: "/weeklyPickup",
    sidebar: () => <div></div>,
    main: () => <Weekly />
  },
  {
    path: "/dailyPickup",
    sidebar: () => <div></div>,
    main: () => <Daily />
  },
  {
    path: "/customerHistory",
    sidebar: () => <div></div>,
    main: () => <h2>Customer are monitored from here</h2>
  },
  {
    path: "/changePassword",
    sidebar: () => <div></div>,
    main: () => <Password />
  },
  {
    path: "/logout",
    sidebar: () => <div></div>,
    main: () => 
        <div>
            <h2>Logout from here</h2>
        </div>
   
  }
];
const styles = {
   width:'100%',
   height:'50px',
   textAlign:'left'

}
const Styles ={
    textDecoration:'none',
    textAlign:'left'
}
 const StylesMobile ={
  width:'100%',
  height:'50px',
  textAlign:'left'
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 450,
    width: 300,
    
  },
  control: {
    padding: theme.spacing(2),
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

 const ClientPage = (props) => {

  const [spacing, setSpacing] = React.useState(2);
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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


  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className={classes.grow}>
          
            
      <div className={classes.sectionDesktop}>
      <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "20%",
            background: "silver",
            margin:'20px',
            borderRadius: '7px',
            boxShadow: '2px 2px 2px 2px silver  '
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/account" style={Styles}>
                 <Button style={styles}>My YoGarbage Account</Button>
                </Link>
            </li>
            <li>
              <Link to="/pickupRequest" style={Styles} >
                  <Button style={styles}>PickUp Request</Button>
                </Link>
            </li>
            <li>
              <Link to="/monthlyPickup" style={Styles}>
                  <Button style={styles}>Monthly PickUps</Button>
                </Link>
            </li>
            <li>
              <Link to="/weeklyPickup" style={Styles}>
                  <Button style={styles}> Weekly PickUps</Button>
                </Link>
            </li>
            <li>
              <Link to="/dailyPickup" style={Styles}>
                  <Button style={styles}>Daily PickUps</Button>
                </Link>
            </li>
            <li>
              <Link to="/customerHistory" style={Styles}> 
                  <Button style={styles}>Customer History</Button>
                </Link>
            </li>
            <li>
              <Link to="/changePassword" style={Styles}> 
                  <Button style={styles}>Change Password</Button>
                </Link>
            </li>
            <li>
              <Link to="/logout" style={Styles}>
                  <Button style={styles}>Logout</Button>
                </Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
       
      
             
      </div>
      <div className={classes.sectionMobile}>
      <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "30%",
            background: "silver",
            margin:'10px'
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/account" style={Styles}>
                 <Button style={StylesMobile}>My Account</Button>
                </Link>
            </li>
            <li>
              <Link to="/pickupRequest" style={Styles} >
                  <Button style={StylesMobile}>Requests</Button>
                </Link>
            </li>
            <li>
              <Link to="/monthlyPickup" style={Styles}>
                  <Button style={StylesMobile}>Monthly PickUps</Button>
                </Link>
            </li>
            <li>
              <Link to="/weeklyPickup" style={Styles}>
                  <Button style={StylesMobile}> Weekly PickUps</Button>
                </Link>
            </li>
            <li>
              <Link to="/dailyPickup" style={Styles}>
                  <Button style={StylesMobile}>Daily PickUps</Button>
                </Link>
            </li>
            <li>
              <Link to="/customerHistory" style={Styles}> 
                  <Button style={StylesMobile}>Customer History</Button>
                </Link>
            </li>
            <li>
              <Link to="/logout" style={Styles}>
                  <Button style={StylesMobile}>Logout</Button>
                </Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
                  
     
               
      </div>
                
            
    </div>

  );
}
export default ClientPage ;