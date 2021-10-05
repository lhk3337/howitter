import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "Routes/Auth";
import Home from "Routes/Home";
import Navigation from "Components/Navigation";
import Profile from "Routes/Profile";
import { Iprops } from "types";
import * as Style from "styles/Components/RouterStyle";
const AppRouter = ({ refreshUser, isLoggedIn, userObj }: Iprops) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <Style.RouterContainer>
            <Route exact path="/" render={() => <Home userObj={userObj} />} />
            <Route exact path="/profile" render={() => <Profile userObj={userObj} refreshUser={refreshUser} />} />
          </Style.RouterContainer>
        ) : (
          <Route exact path="/" component={Auth} /> //로그인 화면
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
