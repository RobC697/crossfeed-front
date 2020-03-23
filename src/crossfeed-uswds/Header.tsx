import React from "react";
import classNames from "classnames";
import classes from "./Header.module.scss";




export const Header: React.FC = ({ children }) => (
  <header className="usa-header usa-header--basic">
    <div className={classNames("usa-nav-container", classes.navContainer)}>
      {children}
      <img src="dds.png" className={classes.logo} alt="dds logo"></img>
      <h2>Crossfeed</h2>
    </div>
  </header>
);

export const HeaderNavbar: React.FC = ({ children }) => (
  <div className={classes.root}>
   <nav className={classNames("site-nav-secondary sticky", classes.miniNavContainer)}>
      <ul>
          <li className="usa-nav__submenu-item">
        <a href="/home">
          <span>
            Home
          </span>
        </a> 
          </li>
          <li className="usa-nav__submenu-item">
        <a href="/vulnerabilities">
          <span>
            Vulnerabilities
          </span>
        </a>
          </li>
          <li className="usa-nav__submenu-item is-current">
        <a href="/dashboard" className="usa-current">
          <span>
            Risk Dashboard
          </span>
        </a>
          </li>
          <li className="usa-nav__submenu-item">
        <a href="/alerts">
          <span>
            Alerts
          </span>
        </a>
          </li>
          <li className="usa-nav__submenu-item">
        <a href="/scans">
          <span>
            Configure Scans
          </span>
        </a>
          </li>
          <li className="usa-nav__submenu-item">
        <a href="/logs">
          <span>
            View Logs
          </span>
        </a>
          </li>
      <li className="usa-nav__submenu-item">
        <a href="/settings">
          <span>
            Settings
          </span>
        </a> 
          </li>
      </ul>
  </nav>
</div>
);