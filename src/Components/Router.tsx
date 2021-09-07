import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "Routes/Auth";
import Home from "Routes/Home";
interface Iprops {
  isLoggedIn: null;
}
const AppRouter = ({ isLoggedIn }: Iprops) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={Home} />
          </>
        ) : (
          <Route exact path="/" component={Auth} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
