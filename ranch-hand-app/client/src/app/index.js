import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import { RanchList, MoviesInsert, MoviesUpdate } from "../pages";

import Landing from "../components/Landing";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/ranches" exact component={RanchList} />
        <Route path="/ranches/create" exact component={MoviesInsert} />
        <Route path="/ranches/update/:id" exact component={MoviesUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
