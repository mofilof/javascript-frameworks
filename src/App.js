
import "./App.css";
import React from "react";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";
import Menu from "./components/layout/Menu"
import AboutGame from "./components/games/AboutGame";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Menu />
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/games/:id" component={AboutGame} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;