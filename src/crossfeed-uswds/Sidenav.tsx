import React, { useState, useCallback } from "react";
import classNames from "classnames";
import classes from "./Sidenav.module.scss";


export const Sidenav: React.FC = () => {
 
  return (
    

    <div className={classNames(classes.sidenav)}>
        <h2 className="usa-heading-alt">Menu</h2><nav aria-label="Secondary navigation">
        <ul className="usa-sidenav">
            <li className="usa-sidenav__item">
            <a href="/" className="usa-current">Home</a>
            </li><li className="usa-sidenav__item">
                <a href="/examplepage">Vulnerabilities (Example Page)</a>
            </li><li className="usa-sidenav__item">
                <a href="/dashboard">Dashboard</a>
            </li><li className="usa-sidenav__item">
                <a href="/alerts">Alerts</a>
            </li>
        </ul>
        <ul>
            <li className="usa-sidenav__item">
                <a href="/scans">Scans</a>
            </li><li className="usa-sidenav__item">
                <a href="/logs">View Logs</a>
            </li><li className="usa-sidenav__item">
                <a href="/settings">Settings</a>
            </li>
        </ul>
        </nav>
    </div>

  );
};



