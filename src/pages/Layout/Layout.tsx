import React, { useCallback, useState } from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./Layout.module.css";
import { Header, HeaderNavbar, OfficialSiteBanner } from "crossfeed-uswds";
import { ExamplePage } from 'pages';


 //<div className={classes.root}>

const Layout: React.FC = () => {
    
  return (
    
    <div className={classes.root}>
        <OfficialSiteBanner />
        <Header />
        <HeaderNavbar />
        <Switch>
          <Route
            path="/examplepage"
            component={ExamplePage}
          />
        </Switch>
    </div>

  );
};

export default Layout;