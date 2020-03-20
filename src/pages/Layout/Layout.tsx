import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Layout.module.css";
import { Header, HeaderNavbar, OfficialSiteBanner } from "crossfeed-uswds";


 //<div className={classes.root}>

const Layout: React.FC = () => {
    
  return (
    
    <div className={classes.root}>
        <OfficialSiteBanner />
        <Header />
        <HeaderNavbar />

    </div>

  );
};

export default Layout;