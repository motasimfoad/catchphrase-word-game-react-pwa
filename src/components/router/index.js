import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from "../../pages/main/main";
import Pregame from "../../pages/pre-game/pregame";
import Ingame from "../../pages/in-game/ingame";

export default function AppRouter() {
  return (
    <Router>
        <Switch>
          <Route path="/ingame">
            <Ingame />
          </Route>
          <Route path="/pregame">
            <Pregame />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </Router>
  );
}