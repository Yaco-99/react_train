import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProvider, createStore } from "easy-peasy";
import model from "./model";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

function NoMatch() {
  return <h1>Error 404 : Not found</h1>;
}

export default App;
