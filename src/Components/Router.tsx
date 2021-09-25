import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "Routes/Auth";
import Home from "Routes/Home";
import Navigation from "Components/Navigation";
import Profile from "Routes/Profile";
import { Iprops } from "types";

const AppRouter = ({ isLoggedIn, userObj }: Iprops) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" render={() => <Home userObj={userObj} />} />
            <Route exact path="/profile" render={() => <Profile userObj={userObj} />} />
          </>
        ) : (
          <Route exact path="/" component={Auth} /> //로그인 화면
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
