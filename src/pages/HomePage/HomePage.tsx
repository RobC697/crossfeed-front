import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./HomePage.module.css";
import { OfficialSiteBanner } from "crossfeed-uswds";

 //<div className={classes.root}>

const HomePage: React.FC = () => {
    
  return (
    
    <div className={classes.root}>
        <OfficialSiteBanner />


    </div>

  );
};

export default HomePage;