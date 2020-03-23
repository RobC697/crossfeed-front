import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Home.module.css";


const Home: React.FC = () => {
    
  return (
    
    <div className={classes.root}>
        <h1>This is an example page for home page/feed</h1>
    </div>

  );
};

export default Home;