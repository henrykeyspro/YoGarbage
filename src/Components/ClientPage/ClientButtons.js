import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/account",
    exact: true,
    sidebar: () => <div>YoGarbage Account</div>,
    main: () => <h2>My Account</h2>
  },
  {
    path: "/pickupRequest",
    sidebar: () => <div>My Pick Up Requests </div>,
    main: () => <h2>Requests for pick up</h2>
  },
  {
    path: "/progressingRequest",
    sidebar: () => <div>progressing Request</div>,
    main: () => <h2>Requests in progress</h2>
  },
  {
    path: "/monthlyPickup",
    sidebar: () => <div>Monthly pick up</div>,
    main: () => <h2>Monthly pick ups</h2>
  },
  {
    path: "/weeklyPickup",
    sidebar: () => <div>Weekly pick up</div>,
    main: () => <h2>Weekly pick ups</h2>
  },
  {
    path: "/dailyPickup",
    sidebar: () => <div>Daily Pick up</div>,
    main: () => <h2>Daily pick ups</h2>
  },
  {
    path: "/changePassword",
    sidebar: () => <div>Change Password </div>,
    main: () => <h2>Change your password from here</h2>
  },
  {
    path: "/customerHistory",
    sidebar: () => <div>Customer History</div>,
    main: () => <h2>Customer are monitored from here</h2>
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
const ClientButtons = (props) => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "20%",
            background: "silver",
            margin:'20px'
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
              <Link to="/progressingRequest" style={Styles}>
                  <Button style={styles}>Progressing Request</Button>
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
              <Link to="/changePassword" style={Styles}>
                  <Button style={styles}>Change Password</Button>
                </Link>
            </li>
            <li>
              <Link to="/customerHistory" style={Styles}> 
                  <Button style={styles}>Customer History</Button>
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
  );
}
export default ClientButtons ;
