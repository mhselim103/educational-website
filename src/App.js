import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AllCourses from "./components/AllCourses/AllCourses";
import Notfound from "./components/Notfound/Notfound";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/courses">
          <AllCourses></AllCourses>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
