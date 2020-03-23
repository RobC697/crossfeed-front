
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { Layout } from "pages";
import "./styles.scss";

const App: React.FC = () => (
  <Router>
  <Layout />
  </Router>
);

export default App;

