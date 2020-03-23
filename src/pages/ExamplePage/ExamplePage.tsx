import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./ExamplePage.module.css";


const ExamplePage: React.FC = () => {
    
  return (
    
    <div className={classes.root}>
        <h1>This is an example page</h1>
    </div>

  );
};

export default ExamplePage;