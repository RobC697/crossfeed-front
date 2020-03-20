
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { HomePage } from "pages";
import "./styles.scss";

const App: React.FC = () => (
  <HomePage />
);

export default App;

