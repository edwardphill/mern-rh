import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavigationBar, Login } from "../components";
import { RanchList, MoviesInsert, MoviesUpdate } from "../pages";

import Landing from "../components/Landing";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import FieldDash from "../components/FieldDash";
import Field from "../components/Field";
import Herd from "../components/Herd";
import HerdDash from "../components/HerdDash";
import AddField from "../components/AddField";
import AddHerd from "../components/AddHerd";



function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/ranches" exact component={RanchList} />
        <Route path="/ranches/create" exact component={MoviesInsert} />
        <Route path="/ranches/update/:id" exact component={MoviesUpdate} />
        <Route path="/FieldDash" exact component={FieldDash} />
        <Route path="/Field" exact component={Field} />
        <Route path="/HerdDash" exact component={HerdDash} />
        <Route path="/Herd" exact component={Herd} />
        <Route path="/AddHerd" exact component={AddHerd} />

        <Route path="/AddField" exact component={AddField} />




      </Switch>
      <br>
      </br>
      <Footer />
    </Router>
  );
}

export default App;
