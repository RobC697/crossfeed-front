import React, { useCallback, useState } from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./Layout.module.css";
import { Header, HeaderNavbar, OfficialSiteBanner } from "crossfeed-uswds";
import { Dashboard, Home, Vulnerabilities} from 'pages';


 

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
        </Switch>       
    
    </div>

  );
};

export default Layout;