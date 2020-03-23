import React, { useCallback, useState } from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./Layout.module.css";
import { Header, HeaderNavbar, OfficialSiteBanner, Sidenav } from "crossfeed-uswds";
import { ExamplePage } from 'pages';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


 

const Layout: React.FC = () => {
    
  return (
    
    <div className={classes.root}>
       
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <OfficialSiteBanner />
            <Header />
            <HeaderNavbar />
          </Grid>   

        <Grid item xs={2}>
          <Sidenav />
        </Grid>

        <Grid item xs={9}>
          <Switch>
          <Route
            path="/examplepage"
            component={ExamplePage}
          />
         
        </Switch>

        </Grid>

      </Grid>
        
    </div>

  );
};

export default Layout;