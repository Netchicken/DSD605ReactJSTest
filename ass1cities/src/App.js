import cityGame from "./components/CityGame";
import appHeader from "./components/AppHeader";
// import share from "./components/Share";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //from reactstrap

import "./App.css";

function App() {
  return (
    <div className='container-fluid'>
      <Switch>
        <Route exact path='/' component={cityGame} />
        <Route component={appHeader} />
        {/* <Route component={share} /> */}
      </Switch>
    </div>
  );
}

export default App;
