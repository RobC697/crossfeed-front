import React, { useCallback, useState } from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./Layout.module.css";
import { Header, HeaderNavbar, OfficialSiteBanner } from "crossfeed-uswds";
import { Alerts, Dashboard, Home, Scans, Logs, Settings, Vulnerabilities} from 'pages';


 

const Layout: React.FC = () => {
    
  return (
    
    <div className={classes.root}>
        
        <OfficialSiteBanner />
        <Header />
        <HeaderNavbar />
        
        <Switch>
        <Route
            path="/home"
            component={Home}
          />
        <Route
            path="/vulnerabilities"
            component={Vulnerabilities}
          />
          <Route
            path="/dashboard"
            component={Dashboard}
          />
          <Route
            path="/alerts"
            component={Alerts}
          />
          <Route
            path="/scans"
            component={Scans}
          />
          <Route
            path="/logs"
            component={Logs}
          />
          <Route
            path="/Settings"
            component={Settings}
          />
        </Switch>       
    
    </div>

  );
};

export default Layout;