import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "Routes/Auth";
import Home from "Routes/Home";
import Navigation from "Components/Navigation";
import Profile from "Routes/Profile";
import { Iprops } from "types/type";

const AppRouter = ({ isLoggedIn }: Iprops) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </>
        ) : (
          <Route exact path="/" component={Auth} /> //로그인 화면
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
