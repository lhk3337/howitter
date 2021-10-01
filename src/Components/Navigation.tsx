import React from "react";
import { authService } from "firebaseAPI";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Iprops } from "types";
import * as Nav from "styles/Components/NavigationStyle";

const Navigation = ({ userObj }: Iprops) => {
  let history = useHistory();
  const onLogOutClick = (): void => {
    authService.signOut();
    history.push("/");
  };
  return (
    <nav>
      <Nav.MenuList>
        <li>
          <Nav.LinkHome to="/">
            <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
          </Nav.LinkHome>
        </li>
        <li>
          <Nav.LinkProfile to="/profile">
            <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
            <Nav.UserName>{userObj.displayName ? `${userObj.displayName}` : "Profile"}</Nav.UserName>
          </Nav.LinkProfile>
        </li>
        <li>
          <button onClick={onLogOutClick}>Log out</button>
        </li>
      </Nav.MenuList>
    </nav>
  );
};

export default Navigation;
