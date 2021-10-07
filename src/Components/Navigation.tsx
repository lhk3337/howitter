import React from "react";
import { authService } from "firebaseAPI";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Iprops } from "types";
import * as Style from "styles/Components/NavigationStyle";

const Navigation = ({ userObj }: Iprops) => {
  let history = useHistory();
  const onLogOutClick = (): void => {
    authService.signOut();
    history.push("/");
  };
  return (
    <nav>
      <Style.MenuList>
        <li>
          <Style.LinkHome to="/">
            <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
          </Style.LinkHome>
        </li>
        <li>
          <Style.LinkProfile to="/profile">
            <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
            <Style.UserName>{userObj.displayName ? `${userObj.displayName}` : "Profile"}</Style.UserName>
          </Style.LinkProfile>
        </li>
        <li>
          <Style.LogOutBtn onClick={onLogOutClick}>Log out</Style.LogOutBtn>
        </li>
      </Style.MenuList>
    </nav>
  );
};

export default Navigation;
