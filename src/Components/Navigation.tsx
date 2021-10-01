import React from "react";
import { authService } from "firebaseAPI";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Iprops } from "types";
import * as NavStyle from "styles/Components/NavigationStyle";

const Navigation = ({ userObj }: Iprops) => {
  let history = useHistory();
  const onLogOutClick = (): void => {
    authService.signOut();
    history.push("/");
  };
  return (
    <nav>
      <NavStyle.MenuList>
        <li>
          <NavStyle.LinkHome to="/">
            <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
          </NavStyle.LinkHome>
        </li>
        <li>
          <NavStyle.LinkProfile to="/profile">
            <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
            <NavStyle.UserName>{userObj.displayName ? `${userObj.displayName}` : "Profile"}</NavStyle.UserName>
          </NavStyle.LinkProfile>
        </li>
        <li>
          <button onClick={onLogOutClick}>Log out</button>
        </li>
      </NavStyle.MenuList>
    </nav>
  );
};

export default Navigation;
