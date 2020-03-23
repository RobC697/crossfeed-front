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
 
  
  <nav className={classNames("site-nav-secondary sticky", classes.miniNavContainer)}>
    <ul>
        <li className="usa-nav__submenu-item">
          <a href="/examplepage">
            <span>
              Click Here to Change to Example Page
            </span>
          </a> 
        </li>
        <li className="usa-nav__submenu-item">
          <a href="/">
            <span>
              Click Here to Change to Go to Main Page
            </span>
          </a> 
        </li>
    </ul>
  </nav>


 
  

  
);