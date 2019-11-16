import React from "react";
import "./App.css";
import Carbono from "./forms/Carbono";
import Papel from "./forms/Papel";
import Agua from "./forms/Agua";
import Home from "./home/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/carbono">
          <Carbono />
        </Route>
        <Route exact path="/agua">
          <Agua />
        </Route>
        <Route exact path="/papel">
          <Papel />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
