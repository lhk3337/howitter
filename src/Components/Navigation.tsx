import { authService } from "firebaseAPI";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navigation = () => {
  let history = useHistory();
  const onLogOutClick = (): void => {
    authService.signOut();
    history.push("/");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={onLogOutClick}>Log out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
