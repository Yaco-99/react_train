import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
