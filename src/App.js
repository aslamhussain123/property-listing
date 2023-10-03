import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./assets/css/style.css";
import RoutingCom from './components/routingCom';

const App = () => {
  return (
    <Router>
      <RoutingCom />
    </Router>
  );
};

export default App;
