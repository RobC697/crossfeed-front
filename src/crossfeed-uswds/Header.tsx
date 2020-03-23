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
 <div></div>
);